import React, { FC } from 'react';
import { Link } from '../Link/Link';
import { createTagLink } from '../../../lib/link';
import { SidebarSection } from './SidebarSection';

interface Tag {
    name: string;
    count: number;
}

export interface SidebarTagsProps {
    tags: Tag[];
}

const sortTags = (tags: Tag[]): Tag[] => {
    return tags.sort((a, b) => b.count - a.count);
};

export const SidebarTags: FC<SidebarTagsProps> = ({ tags, ...others }) => (
    <SidebarSection title="タグ" {...others}>
        <ul className="list-none my-0 pl-0">
            {sortTags(tags).map((tag) => (
                <li
                    key={tag.name}
                    className="text-sidebar text-sm mb-2 hover:text-accent"
                >
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
