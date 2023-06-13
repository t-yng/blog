import { FC } from 'react';
import { css } from '@linaria/core';
import {
    TITLE_LOGO_IMAGE_URL,
    TITLE_LOGO_IMAGE_ALT,
    TITLE_LOGO_LINK_TITLE,
} from '@/constants';
import { colors } from '@/styles/color';
import { Link } from '../Link/Link';

export const GlobalHeaderMain: FC = () => (
    <div className={wrapper}>
        <div className={globalHeaderMain}>
            <Link href="/" title={TITLE_LOGO_LINK_TITLE}>
                <img
                    src={TITLE_LOGO_IMAGE_URL}
                    alt={TITLE_LOGO_IMAGE_ALT}
                    className={titleLogoImg}
                    width={438}
                    height={38}
                    decoding="async"
                />
            </Link>
        </div>
    </div>
);

const wrapper = css`
    background-color: ${colors.main};
`;

const globalHeaderMain = css`
    display: flex;
    justify-content: center;
    padding: 1rem 20px;
`;

const titleLogoImg = css`
    width: 100%;
`;
