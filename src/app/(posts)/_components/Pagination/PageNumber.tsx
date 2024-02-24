import { FC } from 'react';
import { Link } from '@/components/Link';
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
    <PageItem highlight={page === currentPage}>{page}</PageItem>
  </Link>
);
