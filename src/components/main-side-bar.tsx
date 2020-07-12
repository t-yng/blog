import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import { Link } from "./link"
import { createTagLink } from "../utils/link"

interface CategoryItem {
  tag: string
  count: number
}

interface SideBarProps {
  categories: CategoryItem[]
}

const sidebarCss = css`
  padding: 2rem 1rem;
  width: 20%;
`

const summaryCss = css`
  font-weight: bold;
`

const categoriesCss = css`
  list-style: none;
  margin: 10px 0;
  padding-left: 1.5rem;
`

const categoryItemCss = css`
  margin-bottom: 10px;
`

export const SideBarComponent: FC<SideBarProps> = ({ categories }) => (
  <div css={sidebarCss}>
    <div css={summaryCss}>カテゴリ</div>
    <ul css={categoriesCss}>
      {categories.map(category => (
        <Link decoration={false} to={createTagLink(category.tag)}>
          <li css={categoryItemCss}>
            {category.tag} ({category.count})
          </li>
        </Link>
      ))}
    </ul>
  </div>
)

export const SideBar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const categories: CategoryItem[] = data.allMarkdownRemark.group.map(tag => ({
    tag: tag.fieldValue,
    count: tag.totalCount,
  }))

  return <SideBarComponent categories={categories} />
}
