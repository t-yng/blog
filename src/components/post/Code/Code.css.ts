import { style } from '@vanilla-extract/css';

// const style = {
//   pre: css`
//       font-size: inherit !important;
//       background: hsl(233deg 16% 22%) !important;
//   `,
//   code: css`
//       font-size: inherit !important;
//       font-family: '"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace' !important;
//   `,
// };

export const pre = style({
    fontSize: 'inherit !important',
    background: 'hsl(233deg 16% 22%) !important',
});

export const code = style({
    fontSize: 'inherit !important',
    fontFamily:
        '"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace !important',
});
