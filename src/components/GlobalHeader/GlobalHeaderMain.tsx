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
        display: flex;
        justify-content: center;
        padding: 1rem 20px;
    `,
};

const GlobalHeaderMainComponent: FC<GlobalHeaderMainProps> = ({ data }) => (
    <div css={style.wrapper}>
        <div css={style.globalHeaderMain}>
            <Link to="/">
                <img src="/images/title.svg" />
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
