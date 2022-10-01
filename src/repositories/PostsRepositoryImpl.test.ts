import { join } from 'path';
import { instance, mock, when } from 'ts-mockito';
import { profile } from '@/config/profile';
import { Post } from '@/entities';
import { PostsRepositoryImpl } from './PostsRepositoryImpl';

describe('PostsRepositoryImpl', () => {
    beforeAll(() => {
        Object.defineProperty(PostsRepositoryImpl, 'postsDirectory', {
            value: () => join(process.cwd(), 'test/content/posts'),
        });
    });

    describe('getAllPosts', () => {
        it('returns all posts', () => {
            const repo = new PostsRepositoryImpl();
            const result = repo.getAllPosts();

            expect(result.length).toBe(1);
            expect(result[0].id).not.toBe('');
            expect(result[0].slug).toBe('test-post');
            expect(result[0].date).toEqual('2020-04-19T00:00:00.000Z');
            expect(result[0].title).toBe('Test Post Title');
            expect(result[0].description).toEqual(
                'This is test post description'
            );
            expect(result[0].tags).toEqual(['test']);
            expect(result[0].author).toEqual(profile.name);
            expect(result[0].content).toEqual('This is test post.\n');
        });
    });

    describe('getPostBySlug', () => {
        it('returns post by slug', () => {
            const repo = new PostsRepositoryImpl();
            const result = repo.getPostBySlug('test-post');
            expect(result).not.toBeNull();
        });

        it('returns null if slug does not exists', () => {
            const repo = new PostsRepositoryImpl();
            const result = repo.getPostBySlug('not-exist-slug');
            expect(result).toBeNull();
        });
    });

    describe('getPostsByTag', () => {
        it('returns posts by tag', () => {
            const repo = new PostsRepositoryImpl();
            const mockPosts: Post[] = [...Array(3)].map(() => mock<Post>());
            when(mockPosts[0].tags).thenReturn([
                'TypeScript',
                'フロントエンド',
            ]);
            when(mockPosts[1].tags).thenReturn(['TypeScript', 'サーバー']);
            when(mockPosts[2].tags).thenReturn(['フロントエンド']);
            Object.defineProperty(repo, 'getAllPosts', {
                value: () => mockPosts.map((mockPost) => instance(mockPost)),
            });

            const result = repo.getPostsByTag('TypeScript');
            expect(result.length).toBe(2);
        });

        it('ignores Upper or Lower', () => {
            const repo = new PostsRepositoryImpl();
            const mockPosts: Post[] = [mock<Post>()];
            when(mockPosts[0].tags).thenReturn(['TypeScript']);
            Object.defineProperty(repo, 'getAllPosts', {
                value: () => mockPosts.map((mockPost) => instance(mockPost)),
            });

            const result = repo.getPostsByTag('typescript');
            expect(result.length).toBe(1);
        });
    });
});
