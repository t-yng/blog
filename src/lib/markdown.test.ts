import { TEST_IMAGES_DIR_ROOT } from '../../test/constants';
import { parseImageTextWithSize } from './markdown';

describe('markdown', () => {
    describe('parseImageTextWithSize', () => {
        it('画像のMarkdown記法を画像サイズを含めたHTML記法に変換する', () => {
            const result = parseImageTextWithSize(
                'この画像を参照してください。![test1](/images/test1.jpg) ![test2](/images/test2.gif)',
                TEST_IMAGES_DIR_ROOT
            );
            expect(result).toBe(
                'この画像を参照してください。<img src="/images/test1.jpg" alt="test1" width="258" height="300" /> <img src="/images/test2.gif" alt="test2" width="840" height="572" />'
            );
        });

        it('リンクテキストは変換しない', () => {
            const result = parseImageTextWithSize(
                '[リンク](https://example.com)'
            );
            expect(result).toBe('[リンク](https://example.com)');
        });
    });
});
