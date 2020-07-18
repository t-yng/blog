import React, { FC } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { colors } from '../../styles/color';

interface NavItem {
    id: number;
    text: string;
    to: string;
}

interface GlobalHeaderNavProps {
    items: NavItem[];
}

const style = {
    root: css`
        background-color: ${colors.white};
        border-bottom: 0.5px solid ${colors.black4};
    `,
    globalHeaderNav: css`
        padding: 0.5rem 20px 1rem 20px;
        margin: 0 auto;
        max-width: 1152px;
    `,
    link: css`
        text-decoration: none;
        padding-bottom: 1rem;
        &:hover {
            border-bottom: 5px solid ${colors.accent};
        }
    `,
    active: {
        borderBottom: `5px solid ${colors.accent}`,
        color: colors.accent,
        fontWeight: 'bold',
    },
};

const GlobalHeaderNavComponent: FC<GlobalHeaderNavProps> = ({ items }) => (
    <div css={style.root}>
        <div css={style.globalHeaderNav}>
            {items.map(item => (
                <Link
                    key={item.id}
                    css={style.link}
                    to={item.to}
                    activeStyle={style.active}
                    partiallyActive={true}
                >
                    {item.text}
                </Link>
            ))}
        </div>
    </div>
);

export const GlobalHeaderNav = () => {
    const items: NavItem[] = [
        {
            id: 1,
            text: 'Blog',
            to: '/',
        },
    ];

    return <GlobalHeaderNavComponent items={items} />;
};
