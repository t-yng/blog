import React, { FC } from "react"
import { css, SerializedStyles } from "@emotion/core"

interface TagProps {
  name: string
}

const tagCss = css`
  background-color: #c4c4c4;
  border-radius: 4px;
  font-size: 0.75rem;
  padding: 5px;
`

export const Tag: FC<TagProps> = ({ name, ...others }) => (
  <div css={tagCss} {...others}>
    {name}
  </div>
)
