import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const item = style({
    color: colors.black1,
    fontSize: '1rem',
    padding: '5px 15px',
    position: 'relative',
    selectors: {
        '&:hover': {
            color: colors.accent,
            cursor: 'pointer',
        },
    },
});
