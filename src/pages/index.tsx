import { FC } from 'react';
import { GetStaticPropsResult } from 'next';
import { css } from '@/styled-system/css';
import { Layout } from '@/components/common';
import { PostEntries, Pagination } from '@/components/home';
import { Post, Tag, SeoMetadata } from '@/types';
import { siteMetadata } from '@/config/siteMetadata';
import {
  PAGINATION_MIDDLE_PAGES,
  PAGINATION_POST_COUNT_PER_PAGE,
} from '@/constants';
import { sortPostsByDateDesc } from '@/lib/sort';
import { PostRepository } from '@/repositories';
import { TagRepository } from '@/repositories/TagRepository';

type IndexPageProps = {
  posts: Post[];
  tags: Tag[];
  seoMetadata: SeoMetadata;
  pagination: {
    currentPage: number;
    numPages: number;
    middleNumPages: number;
  };
};

const IndexPage: FC<IndexPageProps> = ({
  posts,
  tags,
  pagination,
  seoMetadata,
}) => {
  return (
    <Layout tags={tags} seoMetadata={seoMetadata} title="記事一覧">
      <PostEntries posts={posts} className={postEntries} />
      <Pagination {...pagination} />
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<IndexPageProps>
> => {
  const postsRepository: PostRepository = new PostRepository();
  const tagRepository = new TagRepository();
  const posts = sortPostsByDateDesc(postsRepository.getAllPosts());
  const tags = tagRepository.getAllTags();
  const pagination = {
    currentPage: 1,
    numPages: Math.ceil(posts.length / PAGINATION_POST_COUNT_PER_PAGE),
    middleNumPages: PAGINATION_MIDDLE_PAGES,
  };

  return {
    props: {
      posts: posts.slice(0, PAGINATION_POST_COUNT_PER_PAGE),
      tags,
      pagination,
      seoMetadata: {
        ...siteMetadata,
        title: `記事一覧 | ${siteMetadata.title}`,
      },
    },
  };
};

const postEntries = css({
  marginTop: '16px',
  marginBottom: '2rem',
});
