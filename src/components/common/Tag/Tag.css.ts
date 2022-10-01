import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const tag = style({
    backgroundColor: colors.black6,
    borderRadius: '4px',
    color: colors.black2,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.75rem',
    justifyContent: 'center',
    lineHeight: 1.5,
    padding: '4px 8px',
    ':hover': {
        backgroundColor: colors.black5,
    },
});
