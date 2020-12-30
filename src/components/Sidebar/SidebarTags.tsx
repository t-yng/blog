import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Link } from '../common/Link';
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
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
    `,
    tag: css`
        color: ${colors.black2};
        font-size: 0.875rem;
        line-height: 1.15rem;
        margin-bottom: 0.5rem;
        &:hover {
            color: ${colors.accent};
        }
    `,
};

const sortTags = (tags: Tag[]): Tag[] => {
    return tags.sort((a, b) => b.count - a.count);
};

export const SidebarTags: FC<SidebarTagsProps> = ({ tags, ...others }) => (
    <SidebarSection title="タグ" {...others}>
        <ul css={style.tags}>
            {sortTags(tags).map(tag => (
                <li key={tag.name} css={style.tag}>
                    <Link
                        key={tag.name}
                        decoration={false}
                        href={createTagLink(tag.name)}
                    >{`${tag.name} (${tag.count})`}</Link>
                </li>
            ))}
        </ul>
    </SidebarSection>
);
