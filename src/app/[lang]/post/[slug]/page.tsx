import { cache } from 'react';
import { Metadata } from 'next';
import { PostRepository, TagRepository } from '@/repositories';
import { PageBody } from '@/components/PageBody';
import { siteMetadata } from '@/config/siteMetadata';
import { GlobalHeader } from '@/components/GlobalHeader';
import { type Locale } from '@/config/i18n';
import { Post } from './_components/Post';

type Props = {
  params: Promise<{ lang: Locale; slug: string }>;
};

const getPost = cache((slug: string, lang: Locale) =>
  new PostRepository().getPostBySlug(slug, lang)
);

const getTags = cache((lang: Locale) => new TagRepository().getAllTags(lang));

export function generateStaticParams({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return new PostRepository().getAllPosts(lang).map((p) => ({
    slug: encodeURI(p.slug),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug: encodedSlug } = await params;
  const slug = decodeURI(encodedSlug);
  const post = getPost(slug, lang);

  // "/"が含まれているとエラーが発生するのでエスケープする
  // @see: https://support.cloudinary.com/hc/en-us/articles/202521512-How-to-add-a-slash-character-or-any-other-special-characters-in-text-overlays-
  const encodedPostTitle = encodeURIComponent(post.title).replace(
    /%2F/g,
    '%252F'
  );

  return {
    title: `${post.title} | ${siteMetadata[lang].title}`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      url: siteMetadata[lang].url,
      type: 'article',
      description: post.description,
      siteName: siteMetadata[lang].title,
      images: [
        `https://res.cloudinary.com/dspeq5lct/image/upload/l_text:MPLUSRounded1c-Bold.ttf_52:${encodedPostTitle},co_rgb:000,w_1020,c_fit,y_-100/v1638629595/blog-ogp.jpg`,
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { lang, slug: encodedSlug } = await params;
  const slug = decodeURI(encodedSlug);

  const post = getPost(slug, lang);
  const tags = getTags(lang);
  const availableLocales = new PostRepository().availableLocales(slug, [
    'ja',
    'en',
  ]);

  return (
    <>
      <GlobalHeader locale={lang} availableLocales={availableLocales} />
      <PageBody tags={tags} locale={lang}>
        <Post post={post} locale={lang} />
      </PageBody>
    </>
  );
}
