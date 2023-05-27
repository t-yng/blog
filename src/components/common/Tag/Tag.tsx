import { FC } from 'react';
import { css } from '@linaria/core';
import { Link } from '@/components/common';
import { createTagLink } from '@/lib/link';
import { colors } from '@/styles/color';

interface TagProps {
    name: string;
}

export const Tag: FC<TagProps> = ({ name }) => (
    <Link
        href={createTagLink(name)}
        decoration={false}
        aria-label={`タグ、${name}`}
    >
        <div className={tag}>{name}</div>
    </Link>
);

const tag = css`
    background-color: ${colors.white};
    border: 1px solid ${colors.black4};
    border-radius: 4px;
    color: ${colors.black2};
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    justify-content: center;
    line-height: 1.5;
    padding: 4px 8px;

    &:hover {
        border-color: ${colors.black2};
    }
`;
