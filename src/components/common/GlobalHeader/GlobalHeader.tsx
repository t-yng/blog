import React from 'react';
import { css } from '@emotion/react';
import { GlobalHeaderMain } from './GlobalHeaderMain';

const style = {
    globalHeader: css`
        width: 100vw;
    `,
};

export const GlobalHeader = () => (
    <header css={style.globalHeader}>
        <GlobalHeaderMain />
    </header>
);
