import { FC } from 'react';
import { css } from '@/styled-system/css';
import { Tag } from '@/types';
import { Profile } from '@/config/profile';
import { SidebarTags } from './SidebarTags';
import { SidebarProfile } from './SidebarProfile';

type SidebarProps = {
  tags: Tag[];
  profile: Profile;
};

export const Sidebar: FC<SidebarProps> = ({ tags, profile }) => (
  <aside>
    <SidebarProfile className={profileStyle} profile={profile} />
    <SidebarTags tags={tags} />
  </aside>
);

export const profileStyle = css({
  mb: '2rem',
});
