import React, { FC } from 'react';
import { css } from '@emotion/core';
import { colors } from '../../styles/color';
import { Link } from './Link';

interface PaginationProps {
    current: number;
    pages: number[];
}

const style = {
    box: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    item: css`
        color: ${colors.black1};
        font-size: 1rem;
        margin-left: 15px;
        margin-right: 15px;
        position: relative;
        &:hover{
            color: ${colors.accent};
            cursor: pointer;
        }
    `,
    current: css`
        align-items: center;
        background-color: ${colors.accent};
        border-radius: 50%;
        color: ${colors.white};
        display: flex;
        justify-content: center;
        height: 28px;
        width: 28px;
        &:hover {
            color: ${colors.white};
        }
    `,
};

export const Pagination: FC<PaginationProps> = ({ current, pages }) => (
    <div css={style.box}>
        <div css={style.item}>{'<'}</div>
        {pages.map(p => (
            <div css={[style.item, p === current ? style.current : null]}>
                {p}
            </div>
        ))}
        <div css={style.item}>{'>'}</div>
    </div>
);
