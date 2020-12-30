import { render, screen } from '@testing-library/react';
import { instance, mock, when } from 'ts-mockito';
import { Post as PostEntity } from '../../../entities/Post';
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
        expect(screen.queryByText('2020年 04月 30日')).toBeInTheDocument();
    });

    it('renders post tags', () => {
        const tags = ['TypeScript', 'フロントエンド'];
        when(mockPost.tags).thenReturn(tags);
        const post = instance(mockPost);
        render(<Post post={post} />);

        expect(screen.queryByText(tags[0])).toBeInTheDocument();
        expect(screen.queryByText(tags[1])).toBeInTheDocument();
    });

    it('renders post markdown content as html', () => {
        const markdown = '# 見出し\nテストの内容です。';
        when(mockPost.content).thenReturn(markdown);
        const post = instance(mockPost);
        render(<Post post={post} />);

        expect(screen.queryByText('見出し')).toBeInTheDocument();
        expect(screen.queryByText('テストの内容です。')).toBeInTheDocument();
    });

    it('renders img as child of picture', () => {
        const markdown = '![代替テキスト](/images/posts/slug/test.png)';
        when(mockPost.content).thenReturn(markdown);
        const post = instance(mockPost);
        const { container } = render(<Post post={post} />);

        const img = screen.queryByRole('img');
        expect(container.querySelector('picture')).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('alt', '代替テキスト');
        expect(img).toHaveAttribute('src', '/images/posts/slug/test.png');
    });
});
