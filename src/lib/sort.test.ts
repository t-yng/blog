import { instance, mock, when } from 'ts-mockito';
import { Post } from '../types/Post';
import { sortPostsByDateDesc } from './sort';

describe('sort', () => {
  describe('sortPostsByDateDesc', () => {
    it('sort posts by date desc', () => {
      const mockPosts = [...Array(3)].map(() => mock<Post>());
      when(mockPosts[0].id).thenReturn('1');
      when(mockPosts[0].date).thenReturn('2020-04-29T00:00:00.000Z');
      when(mockPosts[1].id).thenReturn('2');
      when(mockPosts[1].date).thenReturn('2020-05-30T00:00:00.000Z');
      when(mockPosts[2].id).thenReturn('3');
      when(mockPosts[2].date).thenReturn('2020-04-30T00:00:00.000Z');
      const posts = mockPosts.map((post) => instance(post));

      const result = sortPostsByDateDesc(posts);
      expect(result[0].id).toBe('2');
      expect(result[1].id).toBe('3');
      expect(result[2].id).toBe('1');
    });
  });
});
