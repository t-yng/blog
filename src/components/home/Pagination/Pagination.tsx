import { FC } from 'react';
import { css } from '@linaria/core';
import { range } from '@/lib/array';
import { PageNumber } from './PageNumber';
import { PrevPage } from './PrevPage';
import { NextPage } from './NextPage';

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
    <div className={pagination}>
      {shouldShowPrev && <PrevPage page={currentPage - 1} />}
      <PageNumber page={1} currentPage={currentPage} />
      {middleStartPage > 2 && <div className={ellipsis}>...</div>}
      {middlePages.map((page) => (
        <PageNumber key={page} page={page} currentPage={currentPage} />
      ))}
      {middleStartPage < numPages - middleNumPages && (
        <div className={ellipsis}>...</div>
      )}
      <PageNumber page={numPages} currentPage={currentPage} />
      {shouldShowNext && <NextPage page={currentPage + 1} />}
    </div>
  );
};

const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ellipsis = css`
  cursor: default;
`;
