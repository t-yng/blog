import { FC } from 'react';
import { css } from '@linaria/core';
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
    <SidebarProfile className={section} profile={profile} />
    <SidebarTags tags={tags} />
  </aside>
);

export const section = css`
  margin-bottom: 2rem;
`;
