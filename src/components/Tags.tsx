import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Tag } from './Common/Tag';

interface TagsProps {
    tags: string[];
}

const style = {
    tags: css`
        display: flex;
    `,
    tag: css`
        margin-right: 0.5rem;
    `,
};

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

export const Tags: FC<TagsProps> = ({ tags, ...others }) => (
    <div css={style.tags} {...others}>
        {sortTags(tags).map(tag => {
            return (
                <Tag css={style.tag} tag={tag} key={tag} />
            );
        })}
    </div>
);
