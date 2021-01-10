import React, { FC } from 'react';
import { css } from '@emotion/react';
import { SidebarTags } from './SidebarTags';
import { SidebarProfile } from './SidebarProfile';
import { Tag } from '../../../entities/Tag';
import { Profile } from '../../../config/profile';

type SidebarProps = {
    tags: Tag[];
    profile: Profile;
};

const style = {
    section: css`
        margin-bottom: 2rem;
    `,
};

export const Sidebar: FC<SidebarProps> = ({ tags, profile }) => (
    <div>
        <SidebarProfile css={style.section} profile={profile} />
        <SidebarTags tags={tags} />
    </div>
);
