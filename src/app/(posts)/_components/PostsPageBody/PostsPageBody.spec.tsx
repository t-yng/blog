import { render } from '@testing-library/react';
import { createPost } from '@test/mocks/createPost';
import { PostsPageBody } from './PostsPageBody';

describe('PostsPageBody', () => {
  const props = {
    title: 'Test Title',
    posts: [createPost({ title: 'Test Post 1' })],
    tags: [{ name: 'フロントエンド', count: 3 }],
    pagination: {
      currentPage: 1,
      numPages: 5,
      middleNumPages: 3,
    },
  };

  it('should render the title and tags', () => {
    const { getByText } = render(<PostsPageBody {...props} />);
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('フロントエンド (3)')).toBeInTheDocument();
  });

  it('should render the post entries', () => {
    const { getByText } = render(<PostsPageBody {...props} />);
    expect(getByText('Test Post 1')).toBeInTheDocument();
  });

  it('should render the pagination component if pagination prop is provided', () => {
    const { getByTestId } = render(<PostsPageBody {...props} />);
    expect(getByTestId('pagination')).toBeInTheDocument();
  });

  it('should not render the pagination component if pagination prop is not provided', () => {
    const { queryByTestId } = render(
      <PostsPageBody {...props} pagination={undefined} />
    );
    expect(queryByTestId('pagination')).not.toBeInTheDocument();
  });
});
