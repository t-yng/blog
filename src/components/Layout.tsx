import React from 'react';
import { css } from '@emotion/core';
import { GlobalfStyle } from './GlobalStyle';
import { GlobalHeader } from './GlobalHeader';
import { Sidebar } from './Sidebar';

const style = {
    main: css`
        display: grid;
        grid-template-columns: auto 240px;
        grid-gap: 3rem;
        margin: 0 auto;
        max-width: 1152px;
        padding: 2rem 20px;
        @media (max-width: 850px) {
            grid-template-columns: 1fr;
        }
    `,
    content: css`
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
