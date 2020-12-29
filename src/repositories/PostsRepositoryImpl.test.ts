import { join } from 'path';
import { instance, mock, when } from 'ts-mockito';
import { profile } from '../constants/profile';
import { Post } from '../entities/Post';
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
            expect(result[0].excerpt).not.toBe('');
            expect(result[0].slug).toBe('test-post');
            expect(result[0].date).toBe('2020年 04月 19日');
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
        let mockPosts: Post[];

        beforeEach(() => {
            mockPosts = [...Array(3)].map(() => mock<Post>());
        });

        it('returns posts by tag', () => {
            const repo = new PostsRepositoryImpl();
            when(mockPosts[0].tags).thenReturn([
                'TypeScript',
                'フロントエンド',
            ]);
            when(mockPosts[1].tags).thenReturn(['TypeScript', 'サーバー']);
            when(mockPosts[2].tags).thenReturn(['フロントエンド']);
            Object.defineProperty(repo, 'getAllPosts', {
                value: () => mockPosts.map(mockPost => instance(mockPost)),
            });

            const result = repo.getPostsByTag('TypeScript');
            expect(result.length).toBe(2);
        });
    });
});
