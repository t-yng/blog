import React from "react"
import { css } from "@emotion/core"
import { GlobalfStyle } from "./global-style"
import { GlobalHeader } from "./global-header"

const mainCss = css`
  margin: 0 auto;
  max-width: 700px;
`

const LayoutComponent = ({ children }) => (
  <div>
    <GlobalfStyle />
    <GlobalHeader />
    <main css={mainCss}>
      <div>{children}</div>
    </main>
  </div>
)

export const Layout = LayoutComponent
