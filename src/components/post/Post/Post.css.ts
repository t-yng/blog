import { globalStyle, style } from '@vanilla-extract/css';
import { colors } from '../../../styles/color';

export const post = style({
    backgroundColor: colors.white,
    border: `1px solid ${colors.black6}`,
    padding: '1rem',
});

export const header = style({
    marginBottom: '2rem',
});

export const date = style({
    color: colors.black3,
    marginBottom: '0.5rem',
});

export const content = style({});

globalStyle(`${content} h2, h3, h4`, {
    marginTop: '2.5rem',
});

globalStyle(`${content} h2`, {
    borderBottom: `0.5px solid ${colors.black4}`,
    paddingBottom: '0.5rem',
});

globalStyle(`${content} blockquote`, {
    borderLeft: `5px solid ${colors.black4}`,
    color: colors.black2,
    padding: '1rem',
    paddingRight: 0,
    margin: '1.5rem 0',
});
globalStyle(`${content} blockquote p`, {
    marginTop: 0,
    marginBottom: 0,
});

globalStyle(`${content} :not(pre) code`, {
    background: colors.black6,
    fontFamily:
        '"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace',
    padding: '0.1em 0.4em',
});

globalStyle(`${content} table`, {
    borderCollapse: 'collapse',
    display: 'block',
    width: '100%',
    overflow: 'auto',
    margin: '1rem 0',
});

globalStyle(`${content} table th, table td`, {
    padding: '6px 13px',
    border: `1px solid ${colors.black5}`,
});

globalStyle(`${content} thead th`, {
    background: colors.black6,
});

globalStyle(`${content} table tr`, {
    backgroundColor: 'white',
    borderTop: `1px solid ${colors.black5}`,
});

export const imageWrapper = style({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1em',
    marginBottom: '1em',
});
