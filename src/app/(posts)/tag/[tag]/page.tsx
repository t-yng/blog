import { cache } from 'react';
import { PostsPageBody } from '@/app/(posts)/_components';
import { siteMetadata } from '@/config/siteMetadata';
import { sortPostsByDateDesc } from '@/lib/sort';
import { PostRepository, TagRepository } from '@/repositories';
import { GlobalHeader } from '@/components/common';

type Props = {
  params: { tag: string };
};

export const generateMetadata = ({ params }: Props) => {
  return {
    title: `${params.tag}の記事一覧 | ${siteMetadata.title}`,
  };
};

const getPosts = cache((tag: string) => {
  const postRepository: PostRepository = new PostRepository();
  return sortPostsByDateDesc(postRepository.getPostsByTag(tag));
});

const getTags = cache(() => {
  const tagRepository = new TagRepository();
  return tagRepository.getAllTags();
});

export function generateStaticParams() {
  const tagRepository = new TagRepository();
  const tags = tagRepository.getAllTags();

  return tags.map((tag) => ({
    tag: encodeURI(tag.name.toLowerCase()),
  }));
}

export default function TagPostsPage({ params }: Props) {
  const tag = decodeURI(params.tag);
  const [posts, tags] = [getPosts(tag), getTags()];

  return (
    <>
      <GlobalHeader />
      <PostsPageBody title={`${tag}の記事一覧`} posts={posts} tags={tags} />
    </>
  );
}
