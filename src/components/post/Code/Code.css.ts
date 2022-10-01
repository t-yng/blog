import { style } from '@vanilla-extract/css';

export const pre = style({
    fontSize: 'inherit !important',
    background: 'hsl(233deg 16% 22%) !important',
});

export const code = style({
    fontSize: 'inherit !important',
    fontFamily:
        '"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace !important',
});
