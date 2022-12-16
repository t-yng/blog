import { style } from '@vanilla-extract/css';

export const heading1 = style({
    fontSize: '1.8rem',
    '@media': {
        '(max-width: 850px)': {
            fontSize: '1.6rem',
        },
    },
});
