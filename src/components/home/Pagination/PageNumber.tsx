import { FC } from 'react';
import { Link } from '@/components/common';
import { PageItem } from './PageItem';
import * as style from './PageNumber.css';

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
        <PageItem
            className={page === currentPage ? style.highlight : undefined}
        >
            {page}
        </PageItem>
    </Link>
);
