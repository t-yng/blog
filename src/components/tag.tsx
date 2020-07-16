import React, { FC } from "react"
import { css, SerializedStyles } from "@emotion/core"
import { Link } from "gatsby"
import { createTagLink } from "../utils/link"
import { colors } from "../styles/color"

interface TagProps {
  tag: string
}

const style = {
  link: css`
    text-decoration: none;
    color: inherit;
  `,
  tag: css`
    background-color: ${colors.black4};
    border-radius: 4px;
    font-size: 0.75rem;
    padding: 5px;
  `,
}

export const Tag: FC<TagProps> = ({ tag, ...others }) => (
  <Link css={style.link} to={createTagLink(tag)}>
    <div css={style.tag} {...others}>
      {tag}
    </div>
  </Link>
)
