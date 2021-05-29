import React, { FC } from 'react';
import classnames from 'classnames';
import { Link } from '../Link/Link';
import { createTagLink } from '../../../lib/link';

interface TagProps {
    name: string;
    className?: string;
}

export const Tag: FC<TagProps> = ({ name, className }) => (
    <Link href={createTagLink(name)} decoration={false}>
        <div
            className={classnames(
                className,
                'text-tag bg-tag flex rounded flex-col text-xs justify-center py-1 px-2 hover:text-tag-hover'
            )}
        >
            {name}
        </div>
    </Link>
);
