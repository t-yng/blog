import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import { SideBarTags, SideBarTagsProps } from './side-bar-tags';
import { SideBarProfile, SideBarProfileProps } from './side-bar-profile';

type SideBarProps = {
    tags: SideBarTagsProps['tags'];
    profile: SideBarProfileProps;
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

export const SideBarComponent: FC<SideBarProps> = ({ tags, profile }) => (
    <div css={style.sidebar}>
        <SideBarProfile css={style.section} {...profile} />
        <SideBarTags tags={tags} />
    </div>
);

export const SideBar = () => {
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
    const tags: SideBarProps['tags'] = data.allMarkdownRemark.group.map(
        tag => ({
            name: tag.fieldValue,
            count: tag.totalCount,
        })
    );
    const profile: SideBarProps['profile'] = {
        name: 't-yng',
        speciality: 'フロントエンドエンジニア',
        avatar: 'https://via.placeholder.com/150',
        github: 'https://github.com/t-yng',
    };

    return <SideBarComponent tags={tags} profile={profile} />;
};
