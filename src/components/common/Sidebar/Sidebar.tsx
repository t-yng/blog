import { FC } from 'react';
import { SidebarTags } from './SidebarTags';
import { SidebarProfile } from './SidebarProfile';
import { Tag } from '@/entities';
import { Profile } from '@/config/profile';
import * as style from './SideBar.css';

type SidebarProps = {
    tags: Tag[];
    profile: Profile;
};

export const Sidebar: FC<SidebarProps> = ({ tags, profile }) => (
    <div>
        <SidebarProfile className={style.section} profile={profile} />
        <SidebarTags tags={tags} />
    </div>
);
