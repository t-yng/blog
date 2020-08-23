import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { PostEntry } from '../components/PostEntry';

interface TagsProps {
    data: {
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
    };
}

const Index: FC<TagsProps> = ({ data }) => {
    return (
        <Layout>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <PostEntry
                    key={node.id}
                    id={node.id}
                    excerpt={node.excerpt}
                    slug={node.fields.slug}
                    frontmatter={node.frontmatter}
                />
            ))}
        </Layout>
    );
};

export default Index;

export const query = graphql`
    query($tag: String) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
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
