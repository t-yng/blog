import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  PAGINATION_POST_COUNT_PER_PAGE,
  PAGINATION_MIDDLE_PAGES,
} from '@/constants';
import { sortPostsByDateDesc } from '@/lib/sort';
import { PostRepository, TagRepository } from '@/repositories';
import { range } from '@/lib/array';
import { siteMetadata } from '@/config/siteMetadata';
import { PostsPageBody } from '@/app/[lang]/(posts)/_components';
import { GlobalHeader } from '@/components/GlobalHeader';
import { messages, type Locale } from '@/config/i18n';

type Props = {
  params: Promise<{ lang: Locale; page: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, page } = await params;
  return {
    title: `${messages[lang].postsPageTitle(Number(page))} | ${siteMetadata[lang].title}`,
  };
}

export function generateStaticParams({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const posts = sortPostsByDateDesc(new PostRepository().getAllPosts(lang));
  const numPages = Math.ceil(posts.length / PAGINATION_POST_COUNT_PER_PAGE);
  return range(2, numPages).map((page) => ({ page: page.toString() }));
}

export default async function PostsPage({ params }: Props) {
  const { lang, page: pageStr } = await params;
  const page = Number(pageStr);
  if (isNaN(page)) notFound();

  const posts = sortPostsByDateDesc(new PostRepository().getAllPosts(lang));
  const tags = new TagRepository().getAllTags(lang);

  const pagination = {
    currentPage: page,
    numPages: Math.ceil(posts.length / PAGINATION_POST_COUNT_PER_PAGE),
    middleNumPages: PAGINATION_MIDDLE_PAGES,
  };

  return (
    <>
      <GlobalHeader locale={lang} />
      <PostsPageBody
        title={messages[lang].postsTitle}
        posts={posts.slice(
          (page - 1) * PAGINATION_POST_COUNT_PER_PAGE,
          page * PAGINATION_POST_COUNT_PER_PAGE
        )}
        tags={tags}
        pagination={pagination}
        locale={lang}
      />
    </>
  );
}
