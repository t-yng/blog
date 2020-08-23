import React from 'react';
import { css } from '@emotion/core';
import { colors } from '../../styles/color';
import { SidebarSection } from './SidebarSection';

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
    wrapper: css`
        display: flex;
    `,
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
        height: 20px;
        width: 20px;
    `,
};

export const SidebarProfile = ({
    name,
    speciality,
    avatar,
    github,
    ...others
}: SidebarProfileProps) => (
    <SidebarSection title="プロフィール" {...others}>
        <div css={style.wrapper}>
            <img css={style.avatar} src={avatar} alt="筆者のアバター画像" />
            <div>
                <div css={style.name}>{name}</div>
                <div css={style.speciality}>{speciality}</div>
                <div>
                    <a href={github.url} target="_blank" rel="noopener">
                        <img
                            css={style.icon}
                            src={github.icon}
                            alt="Githubへのリンクアイコン"
                        />
                    </a>
                </div>
            </div>
        </div>
    </SidebarSection>
);
