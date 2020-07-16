import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import { Link } from "./link"
import { createTagLink } from "../utils/link"
import { colors } from "../styles/color"

interface TagItem {
  name: string
  count: number
}

export interface SideBarTagsProps {
  tags: TagItem[]
}

const summaryCss = css`
  font-weight: bold;
  padding-bottom: 4px;
  border-bottom: 1px solid ${colors.accent};
`

const tagsCss = css`
  list-style: none;
  margin: 0.75rem 0;
  padding-left: 0;
`

const tagItemCss = css`
  margin-bottom: 10px;
`

export const SideBarTags: FC<SideBarTagsProps> = ({ tags }) => (
  <section>
    <div css={summaryCss}>タグ</div>
    <ul css={tagsCss}>
      {tags.map(tag => (
        <Link decoration={false} to={createTagLink(tag.name)}>
          <li css={tagItemCss}>
            {tag.name} ({tag.count})
          </li>
        </Link>
      ))}
    </ul>
  </section>
)
