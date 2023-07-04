/**
 * WARNING: next-with-linariaの制約でファイル名を変更すると正常に動作しなくなる可能性があります。
 * @see: https://github.com/dlehmhus/next-with-linaria#global-styles-restrictions
 */

import { css } from 'linaria';
import { colors } from './color';

export const globals = css`
  :global() {
    body {
      background-color: ${colors.background};
      color: ${colors.textBlack};
      font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
        'Hiragino Sans', Meiryo, sans-serif;
      margin: 0;
    }

    h1,
    h2,
    h3 {
      margin: 0;
    }

    p,
    ul {
      line-height: 1.8;
    }
  }
`;
