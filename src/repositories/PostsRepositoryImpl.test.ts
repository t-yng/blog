import { join } from 'path';
import { PostsRepositoryImpl } from './PostsRepositoryImpl';

describe('PostsRepositoryImpl', () => {
    it('returns all posts', () => {
        const repo = new PostsRepositoryImpl();
        Object.defineProperty(PostsRepositoryImpl, 'postsDirectory', {
            value: () => join(process.cwd(), 'test/content/posts'),
        });

        const result = repo.getAllPosts();

        expect(result.length).toBe(1);
        expect(result[0].id).not.toBe('');
        expect(result[0].excerpt).not.toBe('');
        expect(result[0].slug).toBe('test-post');
        expect(result[0].date).toBe('2020年 04月 19日');
        expect(result[0].title).toBe('Test Post Title');
        expect(result[0].tags).toEqual(['test']);
        expect(result[0].content).toEqual('This is test post.\n');
    });
});
