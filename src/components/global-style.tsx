import React from 'react';
import { Global as GlobalEm, css } from '@emotion/core';
import { colors } from '../styles/color';

const styles = css`
    body {
        color: ${colors.black1};
        margin: 0;
    }

    h1,
    h2,
    h3 {
        margin: 0;
    }
`;

export const GlobalfStyle = () => <GlobalEm styles={styles} />;
