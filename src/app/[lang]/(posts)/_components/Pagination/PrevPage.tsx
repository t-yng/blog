import { FC } from 'react';
import { Link } from '@/components/Link';
import { createPageLink } from '@/lib/link';
import { PageItem } from './PageItem';
import type { Locale } from '@/config/i18n';

type PrevPageProps = {
  page: number;
  locale?: Locale;
};

export const PrevPage: FC<PrevPageProps> = ({ page, locale }) => (
  <Link
    href={createPageLink(page, locale)}
    decoration={false}
    aria-label="前のページへ"
  >
    <PageItem>{'<'}</PageItem>
  </Link>
);
