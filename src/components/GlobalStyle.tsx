import React from 'react';
import { Global, css } from '@emotion/react';
import { colors } from '../styles/color';

const styles = css`
    body {
        background-color: ${colors.background};
        color: ${colors.black1};
        font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
            'Hiragino Sans', Meiryo, sans-serif;
        margin: 0;
    }

    h1,
    h2,
    h3 {
        margin: 0;
    }
`;

export const GlobalStyle = () => <Global styles={styles} />;
