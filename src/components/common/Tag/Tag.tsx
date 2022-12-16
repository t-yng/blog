import { FC } from 'react';
import { Link } from '@/components/common';
import { createTagLink } from '@/lib/link';
import * as style from './Tag.css';

interface TagProps {
    name: string;
}

export const Tag: FC<TagProps> = ({ name }) => (
    <Link
        href={createTagLink(name)}
        decoration={false}
        anchorProps={{ 'aria-label': `タグ、${name}` }}
    >
        <div className={style.tag}>{name}</div>
    </Link>
);
