import { FC } from 'react';
import { Link } from '@/components/Link';
import { PageItem } from './PageItem';

type NextPageProps = {
  page: number;
};

export const NextPage: FC<NextPageProps> = ({ page }) => (
  <Link href={`/page/${page}`} decoration={false} aria-label="次のページへ">
    <PageItem>{'>'}</PageItem>
  </Link>
);
