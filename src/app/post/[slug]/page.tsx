import { cache } from 'react';
import { Metadata } from 'next';
import { PostRepository, TagRepository } from '@/repositories';
import { PageBody } from '@/components/PageBody';
import { siteMetadata } from '@/config/siteMetadata';
import { GlobalHeader } from '@/components/common/GlobalHeader';
import { Post } from './_components/Post';

type Props = {
  params: {
    slug: string;
  };
};

const getPost = cache((slug: string) => {
  const postRepository = new PostRepository();
  const post = postRepository.getPostBySlug(slug);

  return post;
});

const getTags = cache(() => {
  const tagRepository = new TagRepository();
  return tagRepository.getAllTags();
});

export const generateStaticParams = () => {
  const repository = new PostRepository();
  const posts = repository.getAllPosts();

  return posts.map((p) => ({
    slug: encodeURI(p.slug),
  }));
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const slug = decodeURI(params.slug);
  const post = getPost(slug);

  // "/"が含まれているとエラーが発生するのでエスケープする
  // @see: https://support.cloudinary.com/hc/en-us/articles/202521512-How-to-add-a-slash-character-or-any-other-special-characters-in-text-overlays-
  const encodedPostTitle = encodeURIComponent(post.title).replace(
    /%2F/g,
    '%252F'
  );

  return {
    title: `${post.title} | ${siteMetadata.title}`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      url: siteMetadata.url,
      type: 'article',
      description: post.description,
      siteName: siteMetadata.title,
      images: [
        `https://res.cloudinary.com/dspeq5lct/image/upload/l_text:MPLUSRounded1c-Bold.ttf_52:${encodedPostTitle},co_rgb:000,w_1020,c_fit,y_-100/v1638629595/blog-ogp.jpg`,
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
};

export default function PostPage({ params }: Props) {
  const slug = decodeURI(params.slug);
  const post = getPost(slug);
  const tags = getTags();

  return (
    <>
      <GlobalHeader />
      <PageBody tags={tags}>
        <Post post={post} />
      </PageBody>
    </>
  );
}
