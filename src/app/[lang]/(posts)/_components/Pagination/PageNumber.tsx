import { FC } from 'react';
import { Link } from '@/components/Link';
import { createPageLink } from '@/lib/link';
import { PageItem } from './PageItem';
import type { Locale } from '@/config/i18n';

type PageProps = {
  page: number;
  currentPage: number;
  locale?: Locale;
};

export const PageNumber: FC<PageProps> = ({ page, currentPage, locale }) => (
  <Link
    href={createPageLink(page, locale)}
    decoration={false}
    aria-label={`ページ${page}`}
  >
    <PageItem highlight={page === currentPage}>{page}</PageItem>
  </Link>
);
