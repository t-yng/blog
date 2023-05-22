import { FC } from 'react';
import { css } from '@linaria/core';
import { Tag } from '@/components/common';

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
    <div className={`${tagsCss} ${className}`}>
        {sortTags(tags).map((tag) => {
            return <Tag name={tag} key={tag} />;
        })}
    </div>
);

const tagsCss = css`
    display: flex;
    gap: 0.5rem;
`;
