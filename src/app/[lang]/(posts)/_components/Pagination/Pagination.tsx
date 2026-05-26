import { FC } from 'react';
import { css } from '@/styled-system/css';
import { range } from '@/lib/array';
import { Flex } from '@/components/Flex';
import { PageNumber } from './PageNumber';
import { PrevPage } from './PrevPage';
import { NextPage } from './NextPage';
import type { Locale } from '@/config/i18n';

type PaginationProps = {
  currentPage: number;
  numPages: number;
  middleNumPages: number;
  locale?: Locale;
};

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  numPages,
  middleNumPages,
  locale,
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
    <Flex
      justifyContent="center"
      alignItems="center"
      gap="24px"
      data-testid="pagination"
    >
      {shouldShowPrev && <PrevPage page={currentPage - 1} locale={locale} />}
      <PageNumber page={1} currentPage={currentPage} locale={locale} />
      {middleStartPage > 2 && <div className={ellipsis}>...</div>}
      {middlePages.map((page) => (
        <PageNumber
          key={page}
          page={page}
          currentPage={currentPage}
          locale={locale}
        />
      ))}
      {middleStartPage < numPages - middleNumPages && (
        <div className={ellipsis}>...</div>
      )}
      <PageNumber page={numPages} currentPage={currentPage} locale={locale} />
      {shouldShowNext && <NextPage page={currentPage + 1} locale={locale} />}
    </Flex>
  );
};

const ellipsis = css({
  cursor: 'default',
});
