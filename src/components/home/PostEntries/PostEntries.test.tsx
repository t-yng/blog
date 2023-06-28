import { render, screen } from '@testing-library/react';
import { Post } from '../../../entities/Post';
import { PostEntries } from './PostEntries';

describe('PostEntries', () => {
  const posts: Post[] = [
    {
      id: '1',
      slug: 'test-slug',
      date: '2020-11-15T00:00:00.000Z',
      title: 'title',
      description: 'description',
      tags: [],
      author: 'test',
      content: '',
    },
    {
      id: '2',
      slug: 'test-slug',
      date: '2020-12-30T00:00:00.000Z',
      title: 'title',
      description: 'description',
      tags: [],
      author: 'test',
      content: '',
    },
  ];

  it('renders PostEntry', () => {
    render(<PostEntries posts={posts} />);

    expect(screen.queryAllByTestId('post-entry')).toHaveLength(posts.length);
  });
});
