/** @jsx jsx */
import React from "react"
import { Global as GlobalEm, css, jsx } from "@emotion/core"

const styles = css`
  body {
    margin: 0;
  }

  h1 {
    margin: 0;
  }
`;

export const GlobalfStyle = () => <GlobalEm styles={styles} />
