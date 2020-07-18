import React from 'react';
import { css } from '@emotion/core';
import { colors } from '../../styles/color';

export interface SidebarProfileProps {
    name: string;
    speciality: string;
    avatar: string;
    github: {
        icon: string;
        url: string;
    };
}

const style = {
    summary: css`
        font-weight: bold;
        padding-bottom: 4px;
        border-bottom: 1px solid ${colors.accent};
        margin-bottom: 10px;
    `,
    wrapper: css`
        display: flex;
    `,
    body: css``,
    avatar: css`
        border-radius: 50%;
        margin-right: 0.5rem;
        object-fit: cover;
        height: 4rem;
        width: 4rem;
    `,
    name: css`
        font-weight: bold;
        margin-bottom: 4px;
    `,
    speciality: css`
        font-size: 0.75rem;
        color: ${colors.black2};
        margin-bottom: 4px;
    `,
    icon: css`
        height: 24px;
        width: 24px;
    `,
};

export const SidebarProfile = ({
    name,
    speciality,
    avatar,
    github,
    ...others
}: SidebarProfileProps) => (
    <div {...others}>
        <div css={style.summary}>プロフィール</div>
        <div css={style.wrapper}>
            <img css={style.avatar} src={avatar} />
            <div>
                <div css={style.name}>{name}</div>
                <div css={style.speciality}>{speciality}</div>
                <div>
                    <a href={github.url} target="_blank" rel="noopner">
                        <img css={style.icon} src={github.icon} />
                    </a>
                </div>
            </div>
        </div>
    </div>
);
