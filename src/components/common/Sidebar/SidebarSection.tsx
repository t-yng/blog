import React, { FC } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/color';

interface SidebarSectionProps {
    title: string;
}

const style = {
    main: css`
        background-color: ${colors.white};
    `,
    header: css`
        background-color: ${colors.main};
        color: ${colors.white};
        font-weight: bold;
        padding: 4px 12px;
    `,
    body: css`
        padding: 10px 4px 6px 12px;
    `,
};

export const SidebarSection: FC<SidebarSectionProps> = ({
    children,
    title,
    ...others
}) => (
    <section {...others} css={style.main}>
        <header css={style.header}>{title}</header>
        <div css={style.body}>{children}</div>
    </section>
);
