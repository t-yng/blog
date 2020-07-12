import React, { FC } from "react"
import { css } from "@emotion/core"
import { PageProps, graphql, Link } from "gatsby"
import { Layout } from "../components/layout"
import { Tags } from "../components/tags"

interface TagsProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string
          excerpt: string
          fields: {
            slug: string
          }
          frontmatter: {
            date: string
            title: string
            tags: string[]
          }
        }
      }[]
    }
  }
}

const style = {
  post: css`
    margin-bottom: 2rem;
  `,
  titleLink: css`
    text-decoration: none;
    color: inherit;
  `,
  date: css`
    color: #555;
  `,
  border: css`
    margin: 1.125rem 0;
  `,
  excerpt: css`
    margin-bottom: 1.125rem;
  `,
  footer: css`
    display: flex;
    justify-content: space-between;
  `,
}

const Index: FC<TagsProps> = ({ data }) => {
  return (
    <Layout>
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
            <Link to={node.fields.slug}>続きを読む</Link>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Index

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
`
