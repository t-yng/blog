import React, { FC } from 'react';
import { SidebarTags } from './SidebarTags';
import { SidebarProfile } from './SidebarProfile';
import { Tag } from '../../../entities/Tag';
import { Profile } from '../../../config/profile';

type SidebarProps = {
    tags: Tag[];
    profile: Profile;
};

export const Sidebar: FC<SidebarProps> = ({ tags, profile }) => (
    <div>
        <SidebarProfile className="mb-8" profile={profile} />
        <SidebarTags tags={tags} />
    </div>
);
