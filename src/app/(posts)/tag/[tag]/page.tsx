import { Metadata } from 'next';
import { cache } from 'react';
import { PostsPageBody } from '@/app/(posts)/_components';
import { siteMetadata } from '@/config/siteMetadata';
import { sortPostsByDateDesc } from '@/lib/sort';
import { PostRepository, TagRepository } from '@/repositories';
import { GlobalHeader } from '@/components/GlobalHeader';

type Props = {
  params: Promise<{ tag: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const tag = decodeURI((await params).tag);

  return {
    title: `${tag}の記事一覧 | ${siteMetadata.title}`,
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

export default async function TagPostsPage({ params }: Props) {
  const tag = decodeURI((await params).tag);
  const [posts, tags] = [getPosts(tag), getTags()];

  return (
    <>
      <GlobalHeader />
      <PostsPageBody title={`${tag}の記事一覧`} posts={posts} tags={tags} />
    </>
  );
}
