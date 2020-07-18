import React, { FC } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import { GlobalHeaderNav } from './GlobalHeaderNav';
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
    wrapper: css`
        background-color: ${colors.main};
    `,
    globalHeaderMain: css`
        color: ${colors.white};
        position: relative;
        top: 0;
        left: 0;
        padding: 0.75rem 20px;
        max-width: 1152px;
        margin: 0 auto;
    `,
    siteTitleLink: css`
        text-decoration: none;
        color: inherit;
    `,
};

const GlobalHeaderMainComponent: FC<GlobalHeaderMainProps> = ({ data }) => (
    <div css={style.wrapper}>
        <div css={style.globalHeaderMain}>
            <Link css={style.siteTitleLink} to="/">
                <h1>{data.site.siteMetadata.title}</h1>
            </Link>
        </div>
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
