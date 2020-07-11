import React from "react"
import { css } from "@emotion/core"
import { GlobalfStyle } from "./global-style"
import { GlobalHeader } from "./global-header"

const mainCss = css`
  padding: 0 9rem;
`

const contentCss = css`
    padding: 2rem;
`;

const LayoutComponent = ({ children }) => (
  <div>
    <GlobalfStyle />
    <GlobalHeader />
    <main css={mainCss}>
      <div css={contentCss}>{children}</div>
    </main>
  </div>
)

export const Layout = LayoutComponent
