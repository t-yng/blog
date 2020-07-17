import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import { SideBarTags, SideBarTagsProps } from './side-bar-tags';

type SideBarProps = SideBarTagsProps;

const sidebarCss = css`
    padding: 2rem 1rem;
    width: 20%;
`;

export const SideBarComponent: FC<SideBarProps> = ({ tags }) => (
    <div css={sidebarCss}>
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
    const tags: SideBarTagsProps['tags'] = data.allMarkdownRemark.group.map(
        tag => ({
            name: tag.fieldValue,
            count: tag.totalCount,
        })
    );

    return <SideBarComponent tags={tags} />;
};
