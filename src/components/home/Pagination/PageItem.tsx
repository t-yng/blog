import { FC } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/color';

const style = {
    item: css`
        color: ${colors.black1};
        font-size: 1rem;
        padding: 5px 15px;
        position: relative;
        &:hover {
            color: ${colors.accent};
            cursor: pointer;
        }
    `,
};

export const PageItem: FC = ({ children, ...others }) => (
    <div css={style.item} {...others}>
        {children}
    </div>
);
