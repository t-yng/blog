import { FC } from 'react';
import { PageItem } from './PageItem';
import { Link } from '@/components/common';

type NextPageProps = {
    page: number;
};

export const NextPage: FC<NextPageProps> = ({ page }) => (
    <Link href={`/page/${page}`} decoration={false} aria-label="次のページへ">
        <PageItem>{'>'}</PageItem>
    </Link>
);
