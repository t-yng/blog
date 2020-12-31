import React, { FC } from 'react';
import { Link } from '../../common/Link';
import { PageItem } from './PageItem';

type PrevPageProps = {
    page: number;
};

export const PrevPage: FC<PrevPageProps> = ({ page }) => (
    <Link href={page === 1 ? '/' : `/page/${page}`} decoration={false}>
        <PageItem data-testid="pagination-prev">{'<'}</PageItem>
    </Link>
);
