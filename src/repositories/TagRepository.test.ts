import { instance, mock, when } from 'ts-mockito';
import { Post } from '@/entities';
import { TagRepository } from './TagRepository';

vi.mock('./PostsRepository.ts', () => {
  const mockPosts = [...Array(2)].map(() => mock<Post>());
  when(mockPosts[0].tags).thenReturn(['フロントエンド', 'TypeScript']);
  when(mockPosts[1].tags).thenReturn(['サーバー', 'TypeScript']);

  const PostsRepository = vi.fn();
  PostsRepository.prototype.getAllPosts = () =>
    mockPosts.map((post) => instance(post));

  return { PostsRepository };
});

describe('GetGoupedTagsImpl', () => {
  describe('getAll', () => {
    it('returns all tags', () => {
      const tagRepository = new TagRepository();
      const result = tagRepository.getAllTags();
      expect(result.length).toEqual(3);
      expect(result).toEqual(
        expect.arrayContaining([
          {
            name: 'TypeScript',
            count: 2,
          },
          {
            name: 'フロントエンド',
            count: 1,
          },
          {
            name: 'サーバー',
            count: 1,
          },
        ])
      );
    });
  });
});
