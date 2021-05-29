import React from 'react';
import { SidebarSection } from './SidebarSection';
import { Profile } from '../../../config/profile';

export interface SidebarProfileProps {
    profile: Profile;
    className?: string;
}

export const SidebarProfile = ({
    profile,
    className,
    ...others
}: SidebarProfileProps) => (
    <SidebarSection title="プロフィール" className={className} {...others}>
        <div className={'flex'}>
            <img
                className="border-round mr-2 h-16 w-16 object-cover"
                src={profile.avatar}
                alt="筆者のアバター画像"
                data-testid="avatar-image"
            />
            <div>
                <div className="font-bold mb-1">{profile.name}</div>
                <div className="text-xs mb-1 text-sidebar">
                    {profile.speciality}
                </div>
                <div>
                    <a
                        href={profile.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="h-5 w-5"
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
