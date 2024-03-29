import { render, screen } from '@testing-library/react';
import { instance, mock, when } from 'ts-mockito';
import { Post } from '@/types/Post';
import { PostEntry } from './PostEntry';

describe('PostEntry', () => {
  let mockPost: Post;

  beforeEach(() => {
    mockPost = mock<Post>();
    when(mockPost.title).thenReturn('Post title');
    when(mockPost.date).thenReturn('2020-04-19T00:00:00.000Z');
    when(mockPost.slug).thenReturn('test-slug');
    when(mockPost.tags).thenReturn([]);
  });

  it('renders post title', () => {
    const post = instance(mockPost);
    render(<PostEntry post={post} />);

    expect(screen.queryByText(post.title)).toBeInTheDocument();
  });

  it('renders title as link', () => {
    const post = instance(mockPost);
    render(<PostEntry post={post} />);

    const link = screen.queryByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/post/${post.slug}`);
  });

  it('renders post date', () => {
    when(mockPost.date).thenReturn('2020-04-19T00:00:00.000Z');

    const post = instance(mockPost);
    render(<PostEntry post={post} />);

    expect(screen.queryByText('2020年04月19日')).toBeInTheDocument();
  });

  it('renders Tags component', () => {
    const tags = ['TypeScript', 'フロントエンド'];
    when(mockPost.tags).thenReturn(tags);
    const post = instance(mockPost);

    render(<PostEntry post={post} />);

    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('フロントエンド')).toBeInTheDocument();
  });
});
