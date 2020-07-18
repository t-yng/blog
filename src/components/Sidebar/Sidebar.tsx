import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import { SidebarTags, SidebarTagsProps } from './SidebarTags';
import { SidebarProfile, SidebarProfileProps } from './SidebarProfile';

type SidebarProps = {
    tags: SidebarTagsProps['tags'];
    profile: SidebarProfileProps;
};

const style = {
    sidebar: css`
        padding: 0 1rem 0 1rem;
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
            site {
                siteMetadata {
                    profile {
                        name
                        speciality
                        avatar
                        github {
                            icon
                            url
                        }
                    }
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
    const profile: SidebarProps['profile'] = data.site.siteMetadata.profile;

    return <SidebarComponent tags={tags} profile={profile} />;
};
