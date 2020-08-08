import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Link } from '../Common/Link';
import { createTagLink } from '../../lib/link';
import { colors } from '../../styles/color';
import { SidebarSection } from './SidebarSection';

interface Tag {
    name: string;
    count: number;
}

export interface SidebarTagsProps {
    tags: Tag[];
}

const style = {
    tags: css`
        list-style: none;
        padding-left: 0;
    `,
    tag: css`
        margin-bottom: 0.5rem;
        &:hover {
            color: ${colors.accent};
        }
    `,
};

export const SidebarTags: FC<SidebarTagsProps> = ({ tags, ...others }) => (
    <SidebarSection title="タグ" {...others}>
        <ul css={style.tags}>
            {tags.map(tag => (
                <li key={tag.name} css={style.tag}>
                    <Link
                        key={tag.name}
                        decoration={false}
                        to={createTagLink(tag.name)}
                    >
                        {tag.name} ({tag.count})
                    </Link>
                </li>
            ))}
        </ul>
    </SidebarSection>
);
