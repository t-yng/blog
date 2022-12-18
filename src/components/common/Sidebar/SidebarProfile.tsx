import { SidebarSection } from './SidebarSection';
import { Profile } from '@/config/profile';
import * as style from './SidebarProfile.css';

export interface SidebarProfileProps {
    profile: Profile;
    className?: string;
}

export const SidebarProfile = ({ profile, className }: SidebarProfileProps) => (
    <SidebarSection title="プロフィール" className={className}>
        <div className={style.wrapper}>
            <img
                className={style.avatar}
                src={profile.avatar}
                alt="筆者のアバター画像"
                width={64}
                height={64}
                decoding="async"
            />
            <div>
                <div className={style.name}>{profile.name}</div>
                <div className={style.speciality}>{profile.speciality}</div>
                <div>
                    <a
                        href={profile.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${profile.name}のGitHubプロフィールページ`}
                    >
                        <img
                            className={style.icon}
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
