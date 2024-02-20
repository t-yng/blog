import {
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from 'next';
import { FC } from 'react';
import { css } from '@/styled-system/css';
import { Layout } from '@/components/common';
import { PostEntries } from '@/components/home';
import { siteMetadata } from '@/config/siteMetadata';
import { Post, SeoMetadata, Tag } from '@/types';
import { sortPostsByDateDesc } from '@/lib/sort';
import { PostRepository, TagRepository } from '@/repositories';

type TagPostsPageProps = {
  tag: string;
  posts: Post[];
  tags: Tag[];
  seoMetadata: SeoMetadata;
};

const TagPostsPage: FC<TagPostsPageProps> = ({
  tag,
  posts,
  tags,
  seoMetadata,
}) => (
  <Layout tags={tags} seoMetadata={seoMetadata} title={`${tag}の記事一覧`}>
    <PostEntries posts={posts} className={postEntries} />
  </Layout>
);

export const postEntries = css({
  marginTop: '16px',
});

export default TagPostsPage;

type Params = {
  tag: string;
};

export const getStaticProps: GetStaticProps<TagPostsPageProps, Params> = async (
  context
): Promise<GetStaticPropsResult<TagPostsPageProps>> => {
  if (context.params == null) {
    return {
      notFound: true,
    };
  }
  const tag = context.params.tag;
  const postRepository = new PostRepository();
  const tagRepository = new TagRepository();
  const posts = sortPostsByDateDesc(postRepository.getPostsByTag(tag));
  const tags = tagRepository.getAllTags();

  return {
    props: {
      tag: tag,
      posts: posts,
      tags: tags,
      seoMetadata: {
        ...siteMetadata,
        title: `${tag}の記事一覧 | ${siteMetadata.title}`,
      },
    },
  };
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const tagRepository = new TagRepository();
  const tags = tagRepository.getAllTags();

  return {
    paths: tags.map((tag) => ({
      params: {
        tag: tag.name.toLowerCase(),
      },
    })),
    fallback: false,
  };
};
