import React, { FC } from "react"
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

const Index: FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <div>{node.excerpt}</div>
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
            date
            title
          }
        }
      }
    }
  }
`
