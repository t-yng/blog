import React, { FC } from 'react';
import { css } from '@emotion/core';
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

export const Tags: FC<TagsProps> = ({ tags }) => (
    <div css={style.tags}>
        {tags.sort().map(tag => (
            <Tag css={style.tag} tag={tag} key={tag} />
        ))}
    </div>
);
