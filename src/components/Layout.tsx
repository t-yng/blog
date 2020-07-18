import React from 'react';
import { css } from '@emotion/core';
import { GlobalfStyle } from './GlobalStyle';
import { GlobalHeader } from './GlobalHeader';
import { Sidebar } from './Sidebar';

const style = {
    main: css`
        display: flex;
        padding: 2rem 9rem;
    `,
    content: css`
        box-sizing: border-box;
        margin-right: 2rem;
        width: 80%;
        overflow: auto;
    `,
};

const LayoutComponent = ({ children }) => (
    <div>
        <GlobalfStyle />
        <GlobalHeader />
        <main css={style.main}>
            <div css={style.content}>{children}</div>
            <Sidebar />
        </main>
    </div>
);

export const Layout = LayoutComponent;
