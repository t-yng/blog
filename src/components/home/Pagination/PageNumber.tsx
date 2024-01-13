import { FC } from 'react';
import { css } from '@linaria/core';
import { Link } from '@/components/common';
import { colors } from '@/styles/color';
import { PageItem } from './PageItem';

type PageProps = {
  page: number;
  currentPage: number;
};

export const PageNumber: FC<PageProps> = ({ page, currentPage }) => (
  <Link
    href={page === 1 ? '/' : `/page/${page}`}
    decoration={false}
    aria-label={`ページ${page}`}
  >
    <PageItem className={page === currentPage ? highlight : undefined}>
      {page}
    </PageItem>
  </Link>
);

const highlight = css`
  align-items: center;
  background-color: ${colors.accent};
  border-radius: 50%;
  color: ${colors.white};
  height: 28px;
  padding: 0;
  width: 28px;

  &:hover {
    color: ${colors.white};
    cursor: default;
  }
`;
