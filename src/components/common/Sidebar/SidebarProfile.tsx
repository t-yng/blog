import { css } from '@emotion/react';
import { colors } from '../../../styles/color';
import { SidebarSection } from './SidebarSection';
import { Profile } from '../../../config/profile';

export interface SidebarProfileProps {
    profile: Profile;
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

export const SidebarProfile = ({ profile, ...others }: SidebarProfileProps) => (
    <SidebarSection title="プロフィール" {...others}>
        <div css={style.wrapper}>
            <img
                css={style.avatar}
                src={profile.avatar}
                alt="筆者のアバター画像"
                data-testid="avatar-image"
            />
            <div>
                <div css={style.name}>{profile.name}</div>
                <div css={style.speciality}>{profile.speciality}</div>
                <div>
                    <a
                        href={profile.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            css={style.icon}
                            src={profile.github.icon}
                            alt="Githubへのリンクアイコン"
                            data-testid="github-image"
                        />
                    </a>
                </div>
            </div>
        </div>
    </SidebarSection>
);
