import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const postEntries = style({
    backgroundColor: colors.white,
});

export const border = style({
    border: 'none',
    height: '1px',
    backgroundColor: colors.black4,
});
