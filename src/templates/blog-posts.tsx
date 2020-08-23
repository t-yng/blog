import React, { FC } from 'react';
import { css } from '@emotion/core';
import { PageProps, graphql, Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { Tags } from '../components/Tags';
import { SEO } from '../components/Seo';
import { Pagination } from '../components/Common/Pagination';
import { colors } from '../styles/color';

interface DataType {
    allMarkdownRemark: {
        edges: {
            node: {
                id: string;
                excerpt: string;
                fields: {
                    slug: string;
                };
                frontmatter: {
                    date: string;
                    title: string;
                    tags: string[];
                };
            };
        }[];
    };
}

interface PageContext {
    numPages: number;
    currentPage: number;
}

type BlogPosts = PageProps<DataType, PageContext>;

const style = {
    post: css`
        background-color: ${colors.white};
        border: 1px solid ${colors.black6};
        padding: 1rem;
        margin-bottom: 2rem;
    `,
    titleLink: css`
        text-decoration: none;
        color: inherit;
    `,
    date: css`
        color: ${colors.black3};
        font-size: 0.85rem;
    `,
    border: css`
        margin: 10px 0;
        border: none;
        height: 1px;
        background-color: ${colors.black4};
    `,
    excerpt: css`
        margin-bottom: 1.125rem;
    `,
    footer: css`
        display: flex;
        justify-content: space-between;
    `,
};

const Index: FC<BlogPosts> = ({ pageContext, data }) => {
    return (
        <Layout>
            <SEO />
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id} css={style.post}>
                    <Link css={style.titleLink} to={node.fields.slug}>
                        <h2>{node.frontmatter.title}</h2>
                    </Link>
                    <div css={style.date}>{node.frontmatter.date}</div>
                    <hr css={style.border}></hr>
                    <div css={style.excerpt}>{node.excerpt}</div>
                    <div css={style.footer}>
                        <Tags tags={node.frontmatter.tags} />
                        <Link to={node.fields.slug}>記事の続きを読む</Link>
                    </div>
                </div>
            ))}
            <Pagination
                numPages={pageContext.numPages}
                currentPage={pageContext.currentPage}
                middleNumPages={3}
            />
        </Layout>
    );
};

export default Index;

export const query = graphql`
    query blogPostsQuery($limit: Int!, $skip: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "YYYY年 MM月 DD日")
                        title
                        tags
                    }
                }
            }
        }
    }
`;
