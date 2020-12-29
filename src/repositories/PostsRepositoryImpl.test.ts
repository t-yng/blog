import { join } from 'path';
import { profile } from '../constants/profile';
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
});
