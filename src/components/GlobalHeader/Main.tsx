import React, { FC } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import { GlobalHeaderNav } from './Nav';
import { colors } from '../../styles/color';

interface GlobalHeaderMainProps {
    data: {
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
}

const style = {
    globalHeaderMain: css`
        color: ${colors.white};
        background-color: ${colors.main};
        width: 100vw;
        position: relative;
        top: 0;
        left: 0;
        padding: 1rem 9rem 12px 9rem;
    `,
    siteTitleLink: css`
        text-decoration: none;
        color: inherit;
    `,
    siteTitle: css`
        /* margin: 0; */
        /* margin-bottom: 1.25rem; */
    `,
};

const GlobalHeaderMainComponent: FC<GlobalHeaderMainProps> = ({ data }) => (
    <div css={style.globalHeaderMain}>
        <Link css={style.siteTitleLink} to="/">
            <h1 css={style.siteTitle}>{data.site.siteMetadata.title}</h1>
        </Link>
    </div>
);

export const GlobalHeaderMain: FC = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );

    return <GlobalHeaderMainComponent data={data} />;
};
