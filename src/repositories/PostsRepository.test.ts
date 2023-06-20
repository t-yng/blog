import { join } from 'path';
import { load } from 'cheerio';
import { instance, mock, when } from 'ts-mockito';
import { profile } from '@/config/profile';
import { Post } from '@/entities';
import { PostsRepository } from './PostsRepository';
import type cpx from 'cpx';

vi.mock('cpx', async () => {
    // publicディレクトリに画像をコピーする処理をモック
    const actual = await vi.importActual<typeof cpx>('cpx');
    return {
        ...actual,
        copySync: vi.fn(),
    };
});

describe('PostsRepository', () => {
    beforeAll(() => {
        Object.defineProperty(PostsRepository, 'postsDirectory', {
            value: () => join(process.cwd(), 'test/content/posts'),
        });
    });

    describe('getAllPosts', () => {
        it('returns all posts', () => {
            const repo = new PostsRepository();
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
            expect(result[0].content).toContain(
                '<p>This is test post.<br>\ntest</p>\n'
            );
        });
    });

    describe('getPostBySlug', () => {
        it('returns post by slug', () => {
            const repo = new PostsRepository();
            const result = repo.getPostBySlug('test-post');
            expect(result).not.toBeNull();

            // 画像タグが正しく変換されているか
            const $ = load(result?.content || '');
            expect($('img').attr('src')).toBe(
                '/images/posts/test-post/test.png'
            );
            expect($('img').attr('alt')).toBe('代替テキスト');
            expect($('img').attr('width')).toBe('150');
            expect($('img').attr('height')).toBe('150');
        });

        it('returns null if slug does not exists', () => {
            const repo = new PostsRepository();
            const result = repo.getPostBySlug('not-exist-slug');
            expect(result).toBeNull();
        });
    });

    describe('getPostsByTag', () => {
        it('returns posts by tag', () => {
            const repo = new PostsRepository();
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
            const repo = new PostsRepository();
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
