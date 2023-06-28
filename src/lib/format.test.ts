import { formatDate } from './format';

describe('format', () => {
  describe('formatDate', () => {
    it('format year年 month月 day日', () => {
      const date = '2020-04-19T00:00:00.000Z';
      const result = formatDate(date);
      expect(result).toBe('2020年04月19日');
    });
  });
});
