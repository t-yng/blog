import { FC } from 'react';
import { Link } from '../../common/Link';
import { PageItem } from './PageItem';

type PageProps = {
    page: number;
    currentPage: number;
};

export const PageNumber: FC<PageProps> = ({ page, currentPage }) => (
    <Link
        href={page === 1 ? '/' : `/page/${page}`}
        decoration={false}
        cursor={page === currentPage ? 'default' : 'pointer'}
    >
        <PageItem highlight={page === currentPage}>{page}</PageItem>
    </Link>
);
