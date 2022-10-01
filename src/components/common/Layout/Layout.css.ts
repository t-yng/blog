import { globalStyle, style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const main = style({
    display: 'grid',
    gridTemplateColumns: 'auto 240px',
    gridGap: '3rem',
    margin: '0 auto',
    maxWidth: '1152px',
    padding: '2rem 20px',
    '@media': {
        '(max-width: 850px)': {
            gridTemplateColumns: '1fr',
        },
    },
});

export const content = style({
    overflow: 'auto',
});

globalStyle('body', {
    backgroundColor: colors.background,
    color: colors.textBlack,
    fontFamily:
        "'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif",
    margin: 0,
});

globalStyle('h1, h2, h3', {
    margin: 0,
});

globalStyle('p, ul', {
    lineHeight: 1.8,
});
