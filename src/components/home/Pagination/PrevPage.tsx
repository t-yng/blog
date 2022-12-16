import { FC } from 'react';
import { Link } from '@/components/common';
import { PageItem } from './PageItem';

type PrevPageProps = {
    page: number;
};

export const PrevPage: FC<PrevPageProps> = ({ page }) => (
    <Link
        href={page === 1 ? '/' : `/page/${page}`}
        decoration={false}
        aria-label="前のページへ"
    >
        <PageItem>{'<'}</PageItem>
    </Link>
);
