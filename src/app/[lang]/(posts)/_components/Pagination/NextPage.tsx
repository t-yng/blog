import { FC } from 'react';
import { Link } from '@/components/Link';
import { createPageLink } from '@/lib/link';
import { PageItem } from './PageItem';
import type { Locale } from '@/config/i18n';

type NextPageProps = {
  page: number;
  locale?: Locale;
};

export const NextPage: FC<NextPageProps> = ({ page, locale }) => (
  <Link
    href={createPageLink(page, locale)}
    decoration={false}
    aria-label="次のページへ"
  >
    <PageItem>{'>'}</PageItem>
  </Link>
);
