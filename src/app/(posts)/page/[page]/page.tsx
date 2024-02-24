import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import {
  PAGINATION_POST_COUNT_PER_PAGE,
  PAGINATION_MIDDLE_PAGES,
} from '@/constants';
import { sortPostsByDateDesc } from '@/lib/sort';
import { PostRepository, TagRepository } from '@/repositories';
import { range } from '@/lib/array';
import { siteMetadata } from '@/config/siteMetadata';
import { PostsPageBody } from '@/app/(posts)/_components';
import { GlobalHeader } from '@/components/GlobalHeader';

type Props = {
  params: { page: string };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `記事一覧 ${params.page}ページ目 | ${siteMetadata.title}`,
  };
}

const getPosts = cache(() => {
  const postRepository: PostRepository = new PostRepository();
  return sortPostsByDateDesc(postRepository.getAllPosts());
});

const getTags = cache(() => {
  const tagRepository = new TagRepository();
  return tagRepository.getAllTags();
});

export function generateStaticParams() {
  const repository = new PostRepository();
  const posts = sortPostsByDateDesc(repository.getAllPosts());
  const numPages = Math.ceil(posts.length / PAGINATION_POST_COUNT_PER_PAGE);
  const pages = range(2, numPages);

  return pages.map((page) => ({
    page: page.toString(),
  }));
}

export default function PostsPage({ params }: Props) {
  const page = Number(params.page);
  if (isNaN(page)) {
    return notFound();
  }

  const [posts, tags] = [getPosts(), getTags()];

  const pagination = {
    currentPage: page,
    numPages: Math.ceil(posts.length / PAGINATION_POST_COUNT_PER_PAGE),
    middleNumPages: PAGINATION_MIDDLE_PAGES,
  };

  return (
    <>
      <GlobalHeader />
      <PostsPageBody
        title="記事一覧"
        posts={posts.slice(
          (page - 1) * PAGINATION_POST_COUNT_PER_PAGE,
          page * PAGINATION_POST_COUNT_PER_PAGE
        )}
        tags={tags}
        pagination={pagination}
      />
    </>
  );
}
