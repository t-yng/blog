import React, { FC } from 'react';
import { Link } from '../Link/Link';
import { css } from '@emotion/react';
import { colors } from '../../../styles/color';
import {
    TITLE_LOGO_IMAGE_URL,
    TITLE_LOGO_IMAGE_ALT,
    TITLE_LOGO_LINK_TITLE,
} from '../../../constants';

const style = {
    wrapper: css`
        background-color: ${colors.main};
    `,
    globalHeaderMain: css`
        display: flex;
        justify-content: center;
        padding: 1rem 20px;
    `,
    titleLogoImg: css`
        width: 100%;
    `,
};

export const GlobalHeaderMain: FC = () => (
    <div css={style.wrapper}>
        <div css={style.globalHeaderMain}>
            <Link href="/" anchorProps={{ title: TITLE_LOGO_LINK_TITLE }}>
                <img
                    src={TITLE_LOGO_IMAGE_URL}
                    alt={TITLE_LOGO_IMAGE_ALT}
                    css={style.titleLogoImg}
                />
            </Link>
        </div>
    </div>
);
