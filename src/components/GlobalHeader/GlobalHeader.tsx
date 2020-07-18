import React, { FC } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import { GlobalHeaderNav } from './Nav';
import { colors } from '../../styles/color';
import { GlobalHeaderMain } from './Main';

const style = {
    globalHeader: css`
        width: 100vw;
    `,
};

export const GlobalHeader = () => (
    <header css={style.globalHeader}>
        <GlobalHeaderMain />
        <GlobalHeaderNav />
    </header>
);
