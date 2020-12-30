import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { instance, mock, when } from 'ts-mockito';
import { Post } from '../entities/Post';
import { PostEntry } from './PostEntry';
import { Tags } from './Tags';

describe('PostEntry', () => {
    let mockPost: Post;

    beforeEach(() => {
        mockPost = mock<Post>();
        when(mockPost.title).thenReturn('Post title');
        when(mockPost.formattedDate).thenReturn('2020年 12月 30日');
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
        expect(link).toHaveAttribute('href', `/posts/${post.slug}`);
    });

    it('renders post date', () => {
        const post = instance(mockPost);
        render(<PostEntry post={post} />);

        expect(screen.queryByText(post.formattedDate)).toBeInTheDocument();
    });

    it('renders Tags component', () => {
        const tags = ['TypeScript', 'フロントエンド'];
        when(mockPost.tags).thenReturn(tags);
        const post = instance(mockPost);
        const root = renderer.create(<PostEntry post={post} />).root;

        const tagsComponent = root.findByType(Tags);
        expect(tagsComponent).not.toBeNull();
        expect(tagsComponent.props.tags).toEqual(tags);
    });
});
