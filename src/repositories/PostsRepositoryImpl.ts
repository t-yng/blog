import fs from 'fs';
import crypto from 'crypto';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '@/entities';
import { PostsRepository } from './PostsRepository';
import { profile } from '@/config/profile';
import { parseImageTextWithSize } from '@/lib/markdown';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index';

loadLanguages([
    'typescript',
    'javascript',
    'js',
    'css',
    'rust',
    'html',
    'json',
    'shell',
    'bash',
    'shell-session',
    'yaml',
    'tsx',
]);

export class PostsRepositoryImpl implements PostsRepository {
    getAllPosts(): Post[] {
        const slugs = this.getAllSlugs();
        return slugs
            .map((slug) => this.getPostBySlug(slug))
            .filter((x): x is Post => x != null);
    }

    getPostBySlug(slug: string): Post | null {
        const fullPath = join(
            PostsRepositoryImpl.postsDirectory(),
            slug,
            'index.md'
        );

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContent = fs.readFileSync(fullPath);
        const markdown = matter(fileContent);
        const { data } = markdown;
        let { content } = markdown;
        const md = new MarkdownIt({
            html: true,
            breaks: true,
            highlight: (str, lang) => {
                if (lang && Prism.languages[lang]) {
                    const html = Prism.highlight(
                        str,
                        Prism.languages[lang],
                        lang
                    );

                    return `<pre class="language-${lang}"><code class="language-${lang}">${html}</code></pre>`;
                }
                return '';
            },
        });

        // TODO: imgタグにlazy loading の設定を追加
        md.renderer.rules.image = (tokens, idx, options, _env, self) => {
            const token = tokens[idx];
            token.attrSet('loading', 'lazy');

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
        md.renderer.rules['heading_open'] = (
            tokens,
            idx,
            options,
            _env,
            self
        ) => {
            const token = tokens[idx];
            const nextToken = tokens[idx + 1];

            token.attrSet('id', nextToken.content);

            return self.renderToken(tokens, idx, options);
        };
        content = parseImageTextWithSize(content);
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

    private getAllSlugs(): string[] {
        return fs.readdirSync(PostsRepositoryImpl.postsDirectory());
    }

    private static postsDirectory(): string {
        return join(process.cwd(), 'content/posts');
    }
}
