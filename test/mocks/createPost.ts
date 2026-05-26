import type { Post } from '@/types';

export const createPost = (post?: Partial<Post>): Post => {
  const defaultPost: Post = {
    id: '1',
    slug: 'my-post',
    date: '2020-04-30T00:00:00.000Z',
    title: 'My Post',
    description: 'This is a mock post',
    tags: ['tag1', 'tag2'],
    author: 'John Doe',
    content: 'Lorem ipsum dolor sit amet',
    lang: 'ja',
  };

  return {
    ...defaultPost,
    ...post,
  };
};
