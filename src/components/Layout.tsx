import React, { FC } from 'react';
import { css } from '@emotion/react';
import { GlobalStyle } from './GlobalStyle';
import { GlobalHeader } from './GlobalHeader';
import { Sidebar } from './Sidebar';
import { profile } from '../constants/profile';
import { Tag } from '../entities/Tag';

export type LayoutProps = {
    tags: Tag[];
};

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

export const Layout: FC<LayoutProps> = ({ children, tags }) => {
    return (
        <div>
            <GlobalStyle />
            <GlobalHeader />
            <main css={style.main}>
                <div css={style.content}>{children}</div>
                <Sidebar tags={tags} profile={profile} />
            </main>
        </div>
    );
};
