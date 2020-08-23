import React from 'react';
import { css } from '@emotion/core';
import { GlobalHeaderNav } from './GlobalHeaderNav';
import { GlobalHeaderMain } from './GlobalHeaderMain';

const style = {
    globalHeader: css`
        width: 100vw;
    `,
};

export const GlobalHeader = () => (
    <header css={style.globalHeader}>
        <GlobalHeaderMain />
        {/* <GlobalHeaderNav />  */} {/* ブログだけなので表示しない */}
    </header>
);
