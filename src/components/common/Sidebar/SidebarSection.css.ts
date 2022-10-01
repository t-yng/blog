import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const main = style({
    backgroundColor: colors.white,
});

export const header = style({
    backgroundColor: colors.main,
    color: colors.white,
    fontWeight: 'bold',
    padding: '4px 12px',
});

export const body = style({
    padding: '10px 4px 6px 12px',
});
