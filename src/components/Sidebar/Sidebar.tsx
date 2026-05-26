import { FC } from 'react';
import { css } from '@/styled-system/css';
import { Tag } from '@/types';
import { Profile } from '@/config/profile';
import { SidebarTags } from './SidebarTags';
import { SidebarProfile } from './SidebarProfile';
import type { Locale } from '@/config/i18n';

type SidebarProps = {
  tags: Tag[];
  profile: Profile;
  locale?: Locale;
};

export const Sidebar: FC<SidebarProps> = ({ tags, profile, locale }) => (
  <aside>
    <SidebarProfile className={profileStyle} profile={profile} />
    <SidebarTags tags={tags} locale={locale} />
  </aside>
);

export const profileStyle = css({
  mb: '2rem',
});
