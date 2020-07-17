import React from 'react';
import { css } from '@emotion/core';
import { GlobalfStyle } from './global-style';
import { GlobalHeader } from './global-header';
import { SideBar } from './main-side-bar';

const mainCss = css`
    display: flex;
    padding: 0 9rem;
`;

const contentCss = css`
    box-sizing: border-box;
    padding: 2rem 2rem 0 0;
    width: 80%;
`;

const LayoutComponent = ({ children }) => (
    <div>
        <GlobalfStyle />
        <GlobalHeader />
        <main css={mainCss}>
            <div css={contentCss}>{children}</div>
            <SideBar />
        </main>
    </div>
);

export const Layout = LayoutComponent;
