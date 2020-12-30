import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Link } from '../Link/Link';
import { createTagLink } from '../../../lib/link';
import { colors } from '../../../styles/color';

interface TagProps {
    tag: string;
}

const style = {
    tag: css`
        background-color: ${colors.black6};
        border-radius: 4px;
        color: ${colors.black2};
        display: flex;
        flex-direction: column;
        font-size: 0.75rem;
        justify-content: center;
        line-height: 1.5;
        padding: 4px 8px;
        &:hover {
            background-color: ${colors.black5};
        }
    `,
};

export const Tag: FC<TagProps> = ({ tag, ...others }) => (
    <Link href={createTagLink(tag)} decoration={false}>
        <div css={style.tag} {...others}>
            {tag}
        </div>
    </Link>
);
