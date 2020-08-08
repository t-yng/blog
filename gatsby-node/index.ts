import { createFilePath } from 'gatsby-source-filesystem';
import * as path from 'path';
import { createTagLink } from '../src/lib/link';

export const onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({
            node,
            getNode,
            basePath: 'content/posts',
        });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};

export const createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            postsRemark: allMarkdownRemark (
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            tags: allMarkdownRemark {
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
        }
    `);

    const posts = result.data.postsRemark.edges;
    const postsPerPage = 3;
    const numPages = Math.ceil(posts.length / postsPerPage);

    [...Array(numPages)].forEach((_, i) => {{
        createPage({
            path: i === 0 ? '/' : `/page/${i+1}`,
            component: path.resolve(
                __dirname,
                '../src/templates/BlogPosts.tsx'
            ),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            }
        })
    }})


    posts.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(
                __dirname,
                '../src/templates/blog-post.tsx'
            ),
            context: {
                slug: node.fields.slug,
            },
        });
    });

    const tags = result.data.tags.group;

    tags.forEach(tag => {
        createPage({
            path: createTagLink(tag.fieldValue),
            component: path.resolve(__dirname, '../src/templates/tags.tsx'),
            context: {
                tag: tag.fieldValue,
            },
        });
    });
};
