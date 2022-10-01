import { FC } from 'react';
import { Link } from '../Link/Link';
import { createTagLink } from '../../../lib/link';
import * as style from './Tag.css';

interface TagProps {
    name: string;
}

export const Tag: FC<TagProps> = ({ name }) => (
    <Link href={createTagLink(name)} decoration={false}>
        <div className={style.tag}>{name}</div>
    </Link>
);
