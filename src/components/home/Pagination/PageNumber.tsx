import { FC } from 'react';
import { css } from '@emotion/react';
import { Link } from '../../common/Link';
import { colors } from '../../../styles/color';
import { PageItem } from './PageItem';

const style = {
    highlight: css`
        align-items: center;
        background-color: ${colors.accent};
        border-radius: 50%;
        color: ${colors.white};
        display: flex;
        justify-content: center;
        height: 28px;
        padding: 0;
        margin-left: 15px;
        margin-right: 15px;
        width: 28px;
        &:hover {
            color: ${colors.white};
            cursor: default;
        }
    `,
};

type PageProps = {
    page: number;
    currentPage: number;
};

export const PageNumber: FC<PageProps> = ({ page, currentPage }) => (
    <Link href={page === 1 ? '/' : `/page/${page}`} decoration={false}>
        <PageItem css={[page === currentPage ? style.highlight : null]}>
            {page}
        </PageItem>
    </Link>
);
