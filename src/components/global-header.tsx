import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import { GlobalHeaderNav } from "./global-header-nav"

interface GlobalHeaderProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const rootCss = css`
  background-color: #f0f0f0;
  width: 100vw;
  position: relative;
  top: 0;
  left: 0;
  padding: 1rem 9rem;
`

const siteTitleCss = css`
  margin: 0;
  margin-bottom: 1.25rem;
`

const GlobalHeaderComponent: FC<GlobalHeaderProps> = ({ data }) => (
  <header css={rootCss}>
    <div>
      <h1 css={siteTitleCss}>{data.site.siteMetadata.title}</h1>
      <GlobalHeaderNav />
    </div>
  </header>
)

export const GlobalHeader: FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return <GlobalHeaderComponent data={data} />
}
