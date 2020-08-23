import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { Layout } from '../components/Layout';
import { Tags } from '../components/Tags';
import { SEO } from '../components/Seo';
import { colors } from '../styles/color';

const style = {
    post: css`
        background-color: ${colors.white};
        border: 1px solid ${colors.black6};
        padding: 1rem;
    `,
    header: css`
        margin-bottom: 2rem;
    `,
    title: css`
        margin-bottom: 0.75rem;
    `,
    content: css`
        h2,
        h3,
        h4 {
            margin-top: 2.5rem;
        }
        h2 {
            border-bottom: 0.5px solid ${colors.black4};
            padding-bottom: 0.5rem;
        }
    `,
};

const BlogPost = ({ data }) => (
    <Layout>
        <SEO
            title={data.markdownRemark.frontmatter.title}
            description={data.markdownRemark.frontmatter.description}
        />
        <div css={style.post}>
            <header css={style.header}>
                <h1 css={style.title}>{data.markdownRemark.frontmatter.title}</h1>
                <Tags tags={data.markdownRemark.frontmatter.tags} />
            </header>
            <div
                css={style.content}
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
        </div>
    </Layout>
);

export default BlogPost;

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
                tags
            }
        }
    }
`;
