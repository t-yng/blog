import React, { FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import { PostEntry } from '../components/PostEntry';
import { Pagination } from '../components/Common/Pagination';

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

const Index: FC<BlogPosts> = ({ pageContext, data }) => {
    return (
        <Layout>
            <SEO />
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <PostEntry
                    key={node.id}
                    id={node.id}
                    excerpt={node.excerpt}
                    slug={node.fields.slug}
                    frontmatter={node.frontmatter}
                />
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
