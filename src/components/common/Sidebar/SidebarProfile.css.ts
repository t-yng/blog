import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const wrapper = style({
    display: 'flex',
});

export const avatar = style({
    borderRadius: '50%',
    marginRight: '0.5rem',
    objectFit: 'cover',
    height: '4rem',
    width: '4rem',
});

export const name = style({
    fontWeight: 'bold',
    marginBottom: '4px',
});

export const speciality = style({
    fontSize: '0.75rem',
    color: colors.black2,
    marginBottom: '4px',
});

export const icon = style({
    height: '24px',
    width: '24px',
});
