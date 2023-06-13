import { css } from '@linaria/core';
import { Profile } from '@/config/profile';
import { colors } from '@/styles/color';
import { SidebarSection } from './SidebarSection';

export interface SidebarProfileProps {
    profile: Profile;
    className?: string;
}

export const SidebarProfile = ({ profile, className }: SidebarProfileProps) => (
    <SidebarSection title="プロフィール" className={className}>
        <div className={wrapper}>
            <img
                className={avatar}
                src={profile.avatar}
                alt="筆者のアバター画像"
                width={64}
                height={64}
                decoding="async"
            />
            <div>
                <div className={name}>{profile.name}</div>
                <div className={speciality}>{profile.speciality}</div>
                <div>
                    <a
                        href={profile.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${profile.name}のGitHubプロフィールページ`}
                    >
                        <img
                            className={icon}
                            src={profile.github.icon}
                            aria-hidden="true"
                            alt="GitHubのロゴ"
                            width={24}
                            height={24}
                            decoding="async"
                        />
                    </a>
                </div>
            </div>
        </div>
    </SidebarSection>
);

const wrapper = css`
    display: flex;
`;

const avatar = css`
    border-radius: 50%;
    margin-right: 0.5rem;
    object-fit: cover;
    height: 4rem;
    width: 4rem;
`;

const name = css`
    font-weight: bold;
    margin-bottom: 4px;
`;

const speciality = css`
    font-size: 0.75rem;
    color: ${colors.black2};
    margin-bottom: 4px;
`;

const icon = css`
    height: 24px;
    width: 24px;
`;
