import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const postEntry = style({
    padding: '1rem',
});

export const date = style({
    color: colors.black3,
    fontSize: '0.85rem',
});

export const title = style({
    fontSize: '1.2rem',
    marginTop: '0.5rem',
    '@media': {
        '(max-width: 850px)': {
            fontSize: '1rem',
        },
    },
});

export const tags = style({
    marginTop: '0.5rem',
});
