import React, { FC } from 'react';
import { css } from '@emotion/core';
import { colors } from '../../styles/color';

interface SidebarSectionProps {
    title: string;
}

const style = {
    header: css`
        font-weight: bold;
        padding-bottom: 4px;
        border-bottom: 1px solid ${colors.accent};
        margin-bottom: 1rem;
    `,
};

export const SidebarSection: FC<SidebarSectionProps> = ({ children, title, ...others }) => (
    <section {...others}>
        <header css={style.header}>{title}</header>
        <div>{children}</div>
    </section>
);
