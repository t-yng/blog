import { Metadata } from 'next';
import { sortPostsByDateDesc } from '@/lib/sort';
import { PostRepository, TagRepository } from '@/repositories';
import { siteMetadata } from '@/config/siteMetadata';
import { PostsPageBody } from '@/app/[lang]/(posts)/_components';
import { GlobalHeader } from '@/components/GlobalHeader';
import { messages, type Locale } from '@/config/i18n';

type Props = {
  params: Promise<{ lang: Locale; tag: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, tag: encodedTag } = await params;
  const tag = decodeURI(encodedTag);
  return {
    title: `${messages[lang].tagPostsTitle(tag)} | ${siteMetadata[lang].title}`,
  };
}

export function generateStaticParams({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return new TagRepository().getAllTags(lang).map((tag) => ({
    tag: encodeURI(tag.name.toLowerCase()),
  }));
}

export default async function TagPostsPage({ params }: Props) {
  const { lang, tag: encodedTag } = await params;
  const tag = decodeURI(encodedTag);

  const posts = sortPostsByDateDesc(
    new PostRepository().getPostsByTag(tag, lang)
  );
  const tags = new TagRepository().getAllTags(lang);

  return (
    <>
      <GlobalHeader locale={lang} />
      <PostsPageBody
        title={messages[lang].tagPostsTitle(tag)}
        posts={posts}
        tags={tags}
        locale={lang}
      />
    </>
  );
}
