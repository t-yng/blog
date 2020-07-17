import React, { FC } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import { GlobalHeaderNav } from './global-header-nav';
import { colors } from '../styles/color';
import { GlobalHeaderMain } from './global-header-main';

const style = {
    globalHeader: css`
        width: 100vw;
        /* padding: 1rem 9rem 12px 9rem; */
    `,
};

export const GlobalHeader = () => (
    <header css={style.globalHeader}>
        <GlobalHeaderMain />
        <GlobalHeaderNav />
    </header>
);
