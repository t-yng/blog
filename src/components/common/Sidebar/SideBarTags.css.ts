import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const tags = style({
    listStyle: 'none',
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
});

export const tag = style({
    color: colors.black2,
    fontSize: '0.875rem',
    lineHeight: '1.15rem',
    marginBottom: '0.5rem',
    selectors: {
        '&:hover': {
            color: colors.accent,
        },
    },
});
