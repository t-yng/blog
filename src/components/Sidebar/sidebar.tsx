import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import { SidebarTags, SidebarTagsProps } from './Tags';
import { SidebarProfile, SidebarProfileProps } from './Profile';

type SidebarProps = {
    tags: SidebarTagsProps['tags'];
    profile: SidebarProfileProps;
};

const style = {
    sidebar: css`
        padding: 2rem 1rem;
        width: 20%;
    `,
    section: css`
        margin-bottom: 2rem;
    `,
};

export const SidebarComponent: FC<SidebarProps> = ({ tags, profile }) => (
    <div css={style.sidebar}>
        <SidebarProfile css={style.section} {...profile} />
        <SidebarTags tags={tags} />
    </div>
);

export const Sidebar = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                }
            }
        }
    `);
    const tags: SidebarProps['tags'] = data.allMarkdownRemark.group.map(
        tag => ({
            name: tag.fieldValue,
            count: tag.totalCount,
        })
    );
    const profile: SidebarProps['profile'] = {
        name: 't-yng',
        speciality: 'フロントエンドエンジニア',
        avatar: 'https://via.placeholder.com/150',
        github: 'https://github.com/t-yng',
    };

    return <SidebarComponent tags={tags} profile={profile} />;
};
