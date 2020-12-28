import React, { FC } from 'react';
import { css } from '@emotion/core';
import { GlobalfStyle } from '../components/GlobalStyle';
import { GlobalHeader } from '../components/GlobalHeader';
import { Sidebar } from '../components/Sidebar';
import { usecases } from '../usecases/UsecaseContainer';
import { profile } from '../constants/profile';

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

const LayoutComponent: FC = ({ children }) => {
    const tags = usecases.getGroupedTags.invoke();

    return (
        <div>
            <GlobalfStyle />
            <GlobalHeader />
            <main css={style.main}>
                <div css={style.content}>{children}</div>
                <Sidebar tags={tags} profile={profile} />
            </main>
        </div>
    );
};

export const Layout = LayoutComponent;
