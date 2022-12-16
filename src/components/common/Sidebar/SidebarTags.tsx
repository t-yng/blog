import { FC } from 'react';
import { Link } from '@/components/common';
import { createTagLink } from '@/lib/link';
import { SidebarSection } from './SidebarSection';
import * as style from './SideBarTags.css';

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
        <ul className={style.tags}>
            {sortTags(tags).map((tag) => (
                <li key={tag.name} className={style.tag}>
                    <Link
                        key={tag.name}
                        decoration={false}
                        href={createTagLink(tag.name)}
                        aria-label={`${tag.name}の記事一覧、${tag.count}件`}
                    >{`${tag.name} (${tag.count})`}</Link>
                </li>
            ))}
        </ul>
    </SidebarSection>
);
