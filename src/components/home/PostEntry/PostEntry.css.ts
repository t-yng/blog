import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const postEntry = style({
    padding: '20px 24px',
});

export const date = style({
    color: colors.black3,
    fontSize: '0.85rem',
    display: 'block',
    marginTop: '4px',
});

export const title = style({
    fontSize: '1.2rem',
    '@media': {
        '(max-width: 850px)': {
            fontSize: '1rem',
        },
    },
});

export const tags = style({
    marginTop: '0.5rem',
});
