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
                data-testid="avatar-image"
            />
            <div>
                <div className={style.name}>{profile.name}</div>
                <div className={style.speciality}>{profile.speciality}</div>
                <div>
                    <a
                        href={profile.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className={style.icon}
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
