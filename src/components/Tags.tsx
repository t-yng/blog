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
        margin-right: 5px;
    `,
};

export const Tags: FC<TagsProps> = ({ tags }) => (
    <div css={style.tags}>
        {tags.map(tag => (
            <Tag css={style.tag} tag={tag} key={tag} />
        ))}
    </div>
);
