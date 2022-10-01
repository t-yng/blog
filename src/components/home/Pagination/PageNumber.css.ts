import { style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const highlight = style({
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: '50%',
    color: colors.white,
    display: 'flex',
    justifyContent: 'center',
    height: '28px',
    padding: 0,
    marginLeft: '15px',
    marginRight: '15px',
    width: '28px',
    selectors: {
        '&:hover': {
            color: colors.white,
            cursor: 'default',
        },
    },
});
