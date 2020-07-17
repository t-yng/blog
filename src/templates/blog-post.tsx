import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { Layout } from '../components/layout';
import { Tags } from '../components/tags';

const style = {
    title: css`
        margin-bottom: 0.75rem;
    `,
    border: css`
        margin: 1rem 0;
    `,
};

const BlogPost = ({ data }) => (
    <Layout>
        <div>
            <h1 css={style.title}>{data.markdownRemark.frontmatter.title}</h1>
            <Tags tags={data.markdownRemark.frontmatter.tags} />
            <hr css={style.border} />
            <div
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
                tags
            }
        }
    }
`;
