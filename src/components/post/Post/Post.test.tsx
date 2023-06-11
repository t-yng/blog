import { render, screen } from '@testing-library/react';
import { instance, mock, when } from 'ts-mockito';
import { Post as PostEntity } from '@/entities/Post';
import { Post } from './Post';

describe('Post', () => {
    let mockPost: PostEntity;

    beforeEach(() => {
        mockPost = mock<PostEntity>();
        when(mockPost.title).thenReturn('Post title');
        when(mockPost.date).thenReturn('2020-04-30T00:00:00.000Z');
        when(mockPost.tags).thenReturn([]);
        when(mockPost.content).thenReturn('');
    });

    it('reners post title', () => {
        const post = instance(mockPost);
        render(<Post post={post} />);
        expect(screen.queryByText(post.title)).toBeInTheDocument();
    });

    it('renders post date', () => {
        when(mockPost.date).thenReturn('2020-04-30T00:00:00.000Z');
        const post = instance(mockPost);
        render(<Post post={post} />);
        expect(screen.queryByText('2020年04月30日')).toBeInTheDocument();
    });

    it('renders post tags', () => {
        const tags = ['TypeScript', 'フロントエンド'];
        when(mockPost.tags).thenReturn(tags);
        const post = instance(mockPost);
        render(<Post post={post} />);

        expect(screen.queryByText(tags[0])).toBeInTheDocument();
        expect(screen.queryByText(tags[1])).toBeInTheDocument();
    });

    it('renders content html', () => {
        when(mockPost.content).thenReturn('<h1>見出し</h1><p>テキスト</p>');
        const post = instance(mockPost);
        render(<Post post={post} />);

        expect(screen.getByText('見出し')).toBeInTheDocument();
        expect(screen.getByText('テキスト')).toBeInTheDocument();
    });

    it('renders image', () => {
        const markdown = "<img src='/images/test1.jpg' alt='代替テキスト'>";
        when(mockPost.content).thenReturn(markdown);
        const post = instance(mockPost);
        render(<Post post={post} />);

        const img = screen.queryByRole('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('alt', '代替テキスト');
        expect(img).toHaveAttribute('src', '/images/test1.jpg');
    });
});
