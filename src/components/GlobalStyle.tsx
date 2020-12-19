import React from 'react';
import { Global as GlobalEm, css } from '@emotion/core';
import { colors } from '../styles/color';

const styles = css`
    body {
        background-color: ${colors.background};
        color: ${colors.textBlack};
        font-family: "Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif;
        margin: 0;
    }

    h1,
    h2,
    h3 {
        margin: 0;
    }

    p, ul {
        line-height: 1.8
    }
`;

export const GlobalfStyle = () => <GlobalEm styles={styles} />;
