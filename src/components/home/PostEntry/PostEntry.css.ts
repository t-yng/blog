import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const postEntry = style({
    position: 'relative',
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
    position: 'relative',
    marginTop: '0.5rem',
});

export const linkOverlay = style({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'block',
});
