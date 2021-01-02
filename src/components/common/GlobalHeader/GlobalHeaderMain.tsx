import React, { FC } from 'react';
import { Link } from '../Link/Link';
import { css } from '@emotion/react';
import { colors } from '../../../styles/color';
import { TITLE_LOGO_IMAGE_URL } from '../../../constants/url';

const style = {
    wrapper: css`
        background-color: ${colors.main};
    `,
    globalHeaderMain: css`
        display: flex;
        justify-content: center;
        padding: 1rem 20px;
    `,
};

export const GlobalHeaderMain: FC = () => (
    <div css={style.wrapper}>
        <div css={style.globalHeaderMain}>
            <Link href="/">
                <img src={TITLE_LOGO_IMAGE_URL} />
            </Link>
        </div>
    </div>
);
