import { describe, expect, it } from 'vitest';
import { createTagLink } from './link';

describe('lib/link', () => {
  describe('createTagLink', () => {
    it('change tag to LowerCase', () => {
      const result = createTagLink('Test');
      expect(result).toBe('/tag/test');
    });
  });
});
