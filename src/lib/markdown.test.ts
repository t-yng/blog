import { markdown } from './markdown';

describe('markdown', () => {
    describe('toHtml', () => {
        it('returns html', async () => {
            const markdownText = '# 見出し1\nテストのマークダウンです。';
            const result = await markdown.toHtml(markdownText);
            expect(result).toEqual(
                '<h1>見出し1</h1>\n<p>テストのマークダウンです。</p>\n'
            );
        });
    });
});
