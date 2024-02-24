type Post = {
  id: string;
  slug: string;
  // ISO 8061 format
  // 例: 2020-04-30T00:00:00.000Z
  date: string;
  title: string;
  description: string;
  tags: string[];
  author: string;
  content: string;
};

export const createPost = (post?: Partial<Post>): Post => {
  const defaultPost = {
    id: '1',
    slug: 'my-post',
    date: '2020-04-30T00:00:00.000Z',
    title: 'My Post',
    description: 'This is a mock post',
    tags: ['tag1', 'tag2'],
    author: 'John Doe',
    content: 'Lorem ipsum dolor sit amet',
  };

  return {
    ...defaultPost,
    ...post,
  };
};
