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
    marginTop: '0.5rem',
});

export const tags = style({
    marginTop: '0.5rem',
});
