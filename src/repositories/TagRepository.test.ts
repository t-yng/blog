import { instance, mock, when } from 'ts-mockito';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Post } from '@/types';
import { PostRepository } from './PostRepository';
import { TagRepository } from './TagRepository';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('GetGoupedTagsImpl', () => {
  describe('getAll', () => {
    it('returns all tags', () => {
      const mockPosts = [...Array(2)].map(() => mock<Post>());
      when(mockPosts[0].tags).thenReturn(['フロントエンド', 'TypeScript']);
      when(mockPosts[1].tags).thenReturn(['サーバー', 'TypeScript']);
      vi.spyOn(PostRepository.prototype, 'getAllPosts').mockReturnValue(
        mockPosts.map((post) => instance(post))
      );

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
