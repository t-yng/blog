import { describe, expect, it } from 'vitest';
import { createTagLink, createPageLink, createPostLink } from './link';

describe('lib/link', () => {
  describe('createTagLink', () => {
    it('change tag to LowerCase', () => {
      expect(createTagLink('Test')).toBe('/ja/tag/test');
    });

    it('uses locale prefix', () => {
      expect(createTagLink('Test', 'en')).toBe('/en/tag/test');
    });
  });

  describe('createPageLink', () => {
    it('returns locale root for page 1', () => {
      expect(createPageLink(1, 'ja')).toBe('/ja');
      expect(createPageLink(1, 'en')).toBe('/en');
    });

    it('returns paginated path for page > 1', () => {
      expect(createPageLink(2, 'ja')).toBe('/ja/page/2');
      expect(createPageLink(2, 'en')).toBe('/en/page/2');
    });
  });

  describe('createPostLink', () => {
    it('includes locale prefix', () => {
      expect(createPostLink('my-post', 'ja')).toBe('/ja/post/my-post');
      expect(createPostLink('my-post', 'en')).toBe('/en/post/my-post');
    });
  });
});
