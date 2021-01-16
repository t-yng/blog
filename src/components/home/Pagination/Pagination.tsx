import React, { FC } from 'react';
import { css } from '@emotion/react';
import { range } from '../../../lib/array';
import { PageNumber } from './PageNumber';
import { PrevPage } from './PrevPage';
import { NextPage } from './NextPage';

const style = {
    pagination: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    ellipsis: css`
        cursor: default;
    `,
};

type PaginationProps = {
    currentPage: number;
    numPages: number;
    middleNumPages: number;
};

export const Pagination: FC<PaginationProps> = ({
    currentPage,
    numPages,
    middleNumPages,
}) => {
    const shouldShowPrev = currentPage > 1;
    const shouldShowNext = currentPage !== numPages;
    let middleStartPage = currentPage - Math.floor(middleNumPages / 2);
    if (middleStartPage + middleNumPages > numPages) {
        middleStartPage = numPages - middleNumPages;
    }
    if (middleStartPage < 2) {
        middleStartPage = 2;
    }
    const middlePages = range(middleStartPage, middleNumPages).filter(
        (page) => page < numPages
    );

    return (
        <div css={style.pagination}>
            {shouldShowPrev && <PrevPage page={currentPage - 1} />}
            <PageNumber page={1} currentPage={currentPage} />
            {middleStartPage > 2 && <div css={style.ellipsis}>...</div>}
            {middlePages.map((page) => (
                <PageNumber key={page} page={page} currentPage={currentPage} />
            ))}
            {middleStartPage < numPages - middleNumPages && (
                <div css={style.ellipsis}>...</div>
            )}
            <PageNumber page={numPages} currentPage={currentPage} />
            {shouldShowNext && <NextPage page={currentPage + 1} />}
        </div>
    );
};
