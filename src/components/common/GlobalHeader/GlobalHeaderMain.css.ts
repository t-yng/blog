import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const wrapper = style({
    backgroundColor: colors.main,
});

export const globalHeaderMain = style({
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem 20px',
});

export const titleLogoImg = style({
    width: '100%',
});
