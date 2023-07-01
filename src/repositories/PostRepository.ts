import fs from 'fs';
import crypto from 'crypto';
import path, { join } from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import loadLanguages from 'prismjs/components/index';
import Prism from 'prismjs';
import urlJoin from 'url-join';
import sizeOf from 'image-size';
import cpx from 'cpx';
import { Post } from '@/entities';
import { Post as PostModel } from '@/models';
import { profile } from '@/config/profile';
import { NotFoundPostError } from './error';

export class PostRepository {
  getAllPosts(): Post[] {
    const slugs = this.getAllSlugs();
    return slugs
      .map((slug) => this.getPostBySlug(slug))
      .filter((x): x is Post => x != null);
  }

  getAllPostEntries() {
    const slugs = this.getAllSlugs();
    return slugs.map((slug) => this.getRawPostBySlug(slug));
  }

  getRawPostBySlug(slug: string): Post {
    const fullPath = join(PostRepository.postsDirectory(), slug, 'index.md');

    if (!fs.existsSync(fullPath)) {
      throw new NotFoundPostError(`Post is not found by slug: ${slug}`);
    }

    const fileContent = fs.readFileSync(fullPath);
    const markdown = matter(fileContent);
    const { data } = markdown;
    const { content } = markdown;

    return {
      id: crypto.createHash('md5').update(slug).digest('hex'),
      slug,
      date: data['date'].toISOString(),
      title: data['title'],
      description: data['description'],
      tags: data['tags'],
      author: data['author'] || profile.name,
      content,
    };
  }

  getPostBySlug(slug: string): Post {
    const fullPath = join(PostRepository.postsDirectory(), slug, 'index.md');

    if (!fs.existsSync(fullPath)) {
      throw new NotFoundPostError(`Post is not found by slug: ${slug}`);
    }

    const fileContent = fs.readFileSync(fullPath);
    const markdown = matter(fileContent);
    const { data } = markdown;
    let { content } = markdown;
    const md = new MarkdownIt({
      html: true,
      breaks: true,
      highlight: (str, lang) => {
        if (lang && !Prism.languages[lang]) {
          // prism.jsで言語ハイライトでテキストをトークナイズするために言語パッケージを読み込み
          loadLanguages(lang);
        }
        if (lang && Prism.languages[lang]) {
          const html = Prism.highlight(str, Prism.languages[lang], lang);

          return `<pre class="language-${lang}"><code class="language-${lang}">${html}</code></pre>`;
        }
        return '';
      },
    });

    // TODO: imgタグにlazy loading の設定を追加
    md.renderer.rules.image = (tokens, idx, options, _env, self) => {
      const token = tokens[idx];
      token.attrSet('loading', 'lazy');
      token.attrSet('alt', token.content); // alt属性が正常にセットされないので設定

      const src = token.attrGet('src');
      if (src) {
        const contentDir = path.join(PostRepository.postsDirectory(), slug);
        const imagePath = path.join(contentDir, src);

        if (!fs.existsSync(imagePath)) {
          throw new Error(`image doesn't exist for "${imagePath}"`);
        }

        // CLS対策のため画像のサイズを取得して設定
        const dimensions = sizeOf(imagePath);
        if (dimensions.width && dimensions.height) {
          token.attrSet('width', dimensions.width.toString());
          token.attrSet('height', dimensions.height.toString());
        }

        // publicディレクトリに画像をコピー
        // FIXME: このタイミングで画像をコピーすべきか悩ましいVercelBlobなどの外部サービスを利用することも検討する
        const publicImageDirectory = path.join(
          process.cwd(),
          'public',
          'images',
          'posts',
          slug
        );
        cpx.copySync(imagePath, publicImageDirectory, {
          update: true,
        });

        // 画像パスをpublicディレクトリへのパスに変換
        token.attrSet('src', urlJoin(`/images/posts/${slug}`, src));
      }

      return self.renderToken(tokens, idx, options);
    };

    // 外部リンクの場合は別タブで表示
    md.renderer.rules['link_open'] = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      const result = token.attrs?.find((attr) => attr[0] === 'href');
      const href = result?.[1];
      const isExternalLink = href != null ? /^http/.test(href) : false;

      if (isExternalLink) {
        token.attrSet('target', '_blank');
      }

      return self.renderToken(tokens, idx, options);
    };

    // heading tag にアンカーリンクを追加
    md.renderer.rules['heading_open'] = (tokens, idx, options, _env, self) => {
      const token = tokens[idx];
      const nextToken = tokens[idx + 1];

      token.attrSet('id', nextToken.content);

      return self.renderToken(tokens, idx, options);
    };
    content = md.render(content);

    return {
      id: crypto.createHash('md5').update(slug).digest('hex'),
      slug,
      date: data['date'].toISOString(),
      title: data['title'],
      description: data['description'],
      tags: data['tags'],
      author: data['author'] || profile.name,
      content: content,
    };
  }

  getPostsByTag(tag: string) {
    const posts = this.getAllPosts();
    return posts.filter((post) => {
      const tags = post.tags.map((tag) => tag.toLowerCase());
      return tags.includes(tag.toLowerCase());
    });
  }

  createDraftPost(post: PostModel) {
    const slug = Date.now().toString();
    const dirPath = join(PostRepository.postsDirectory(), slug);

    if (fs.existsSync(dirPath)) {
      throw new Error(`Post is already exist by slug: ${slug}`);
    }

    fs.mkdirSync(dirPath);
    fs.writeFileSync(join(dirPath, 'index.md'), post.toMarkdown());
  }

  private getAllSlugs(): string[] {
    return fs.readdirSync(PostRepository.postsDirectory());
  }

  private static postsDirectory(): string {
    return join(process.cwd(), 'content/posts');
  }
}
