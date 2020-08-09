import React, { FC } from 'react';
import { css } from '@emotion/core';
import { colors } from '../../styles/color';
import { range } from '../../lib/array';
import { Link } from './Link';

interface PaginationProps {
    currentPage: number;
    numPages: number;
    middleNumPages: number;
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
        padding: 5px 15px;
        position: relative;
        &:hover {
            color: ${colors.accent};
            cursor: pointer;
        }
    `,
    ellipsis: css`
        cursor: default;
    `,
    current: css`
        align-items: center;
        background-color: ${colors.accent};
        border-radius: 50%;
        color: ${colors.white};
        display: flex;
        justify-content: center;
        height: 28px;
        padding: 0;
        margin-left: 15px;
        margin-right: 15px;
        width: 28px;
        &:hover {
            color: ${colors.white};
            cursor: default;
        }
    `,
};

interface PageItemProps {
    page: number;
    currentPage: number;
}

const PageItem: FC<PageItemProps> = ({ page, currentPage }) => (
    <Link to={page === 1 ? '/' : `/page/${page}`} decoration={false}>
        <div css={[style.item, page === currentPage ? style.current : null]}>
            {page}
        </div>
    </Link>
);

interface MiddlePageItems {
    numPages: number;
    currentPage: number;
    middleNumPages: number;
}

const MiddlePageItems: FC<MiddlePageItems> = ({
    numPages,
    currentPage,
    middleNumPages,
}) => (
    <>
        {currentPage < middleNumPages &&
            range(2, middleNumPages).map(p => (
                <PageItem page={p} currentPage={currentPage} />
            ))}
        {middleNumPages <= currentPage &&
            currentPage < (numPages - middleNumPages) &&
            range(currentPage - 1, middleNumPages).map(p => (
                <PageItem page={p} currentPage={currentPage} />
            ))}
        {middleNumPages <= currentPage &&
            (numPages - middleNumPages) <= currentPage &&
            range(numPages - middleNumPages, middleNumPages).map(p => (
                <PageItem page={p} currentPage={currentPage} />
            ))}
    </>
);

export const Pagination: FC<PaginationProps> = ({
    currentPage,
    numPages,
    middleNumPages,
}) => (
    <div css={style.box}>
        {currentPage > 1 && (
            <Link
                to={currentPage === 2 ? '/' : `/page/${currentPage - 1}`}
                decoration={false}
            >
                <div css={style.item}>{'<'}</div>
            </Link>
        )}
        <PageItem page={1} currentPage={currentPage} />
        {currentPage > middleNumPages && numPages > middleNumPages + 2 && (
            <div css={style.ellipsis}>...</div>
        )}
        {numPages <= middleNumPages &&
            range(2, numPages - middleNumPages + 1).map(p => (
                <PageItem page={p} currentPage={currentPage} />
            ))}
        {numPages > middleNumPages && (
            <MiddlePageItems
                numPages={numPages}
                currentPage={currentPage}
                middleNumPages={middleNumPages}
            />
        )}
        {currentPage < numPages - middleNumPages &&
            numPages > middleNumPages + 2 && (
                <div css={style.ellipsis}>...</div>
            )}
        <PageItem page={numPages} currentPage={currentPage} />
        {currentPage !== numPages && (
            <Link to={`/page/${currentPage + 1}`} decoration={false}>
                <div css={style.item}>{'>'}</div>
            </Link>
        )}
    </div>
);
