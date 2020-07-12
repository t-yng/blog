import React, { FC } from "react"
import { css } from "@emotion/core"

interface CategoryItem {
  text: string
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
        <li css={categoryItemCss}>
          {category.text}（{category.count}）
        </li>
      ))}
    </ul>
  </div>
)

export const SideBar = () => {
  const categories: CategoryItem[] = [
    {
      text: "フロントエンド",
      count: 1,
    },
    {
      text: "Rust",
      count: 12,
    },
  ]

  return <SideBarComponent categories={categories} />
}
