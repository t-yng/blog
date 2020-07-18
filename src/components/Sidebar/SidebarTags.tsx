import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Link } from '../Common/Link';
import { createTagLink } from '../../utils/link';
import { colors } from '../../styles/color';

interface Tag {
    name: string;
    count: number;
}

export interface SidebarTagsProps {
    tags: Tag[];
}

const summaryCss = css`
    font-weight: bold;
    padding-bottom: 4px;
    border-bottom: 1px solid ${colors.accent};
    margin-bottom: 1rem;
`;

const tagsCss = css`
    list-style: none;
    padding-left: 0;
`;

const tagItemCss = css`
    margin-bottom: 6px;
    &:hover {
        color: ${colors.accent}
    }
`;

export const SidebarTags: FC<SidebarTagsProps> = ({ tags }) => (
    <section>
        <div css={summaryCss}>タグ</div>
        <ul css={tagsCss}>
            {tags.map(tag => (
                <Link decoration={false} to={createTagLink(tag.name)}>
                    <li css={tagItemCss}>
                        {tag.name} ({tag.count})
                    </li>
                </Link>
            ))}
        </ul>
    </section>
);
