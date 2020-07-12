import React, { FC } from "react"
import { css } from "@emotion/core"
import { PageProps, graphql } from "gatsby"
import { Layout } from "../components/layout"

interface IndexPageProps extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string
          excerpt: string
          frontmatter: {
            date: string
            title: string
          }
        }
      }[]
    }
  }
}

const dateCss = css`
  color: #555;
`

const borderCss = css`
  margin: 1.125rem 0;
`

const excerptCss = css`
  margin-bottom: 1.125rem;
`

const footerCss = css`
  display: flex;
  justify-content: space-between;
`

const tagCss = css`
  background-color: #c4c4c4;
  border-radius: 4px;
  font-size: 0.75rem;
  padding: 5px;
`

const Index: FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <div css={dateCss}>{node.frontmatter.date}</div>
          <hr css={borderCss}></hr>
          <div css={excerptCss}>{node.excerpt}</div>
          <div css={footerCss}>
            <div>
              <div css={tagCss}>フロントエンド</div>
            </div>
            <a href="/">続きを読む</a>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Index

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "YYYY年 MM月 DD日")
            title
          }
        }
      }
    }
  }
`
