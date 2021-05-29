import React, { FC } from 'react';
import classnames from 'classnames';
import { Tag } from '../Tag/Tag';

interface TagsProps {
    tags: string[];
    className?: string;
}

const sortTags = (tags: string[]): string[] => {
    return tags.sort((a, b) => {
        const aName = a.toUpperCase();
        const bName = b.toUpperCase();

        if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        }

        return 0;
    });
};

export const Tags: FC<TagsProps> = ({ tags, className }) => (
    <div className={classnames(className, 'flex')}>
        {sortTags(tags).map((tag) => {
            return <Tag className="mr-2" name={tag} key={tag} />;
        })}
    </div>
);
