import React, { FC } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

interface NavItem {
  id: number
  text: string
  to: string
}

interface GlobalHeaderNavProps {
  items: NavItem[]
}

const style = {
  link: css`
    text-decoration: none;
    color: inherit;
    padding-bottom: 8px;
    &:hover {
      border-bottom: 8px solid #c4c4c4;
    }
  `,
  active: {
    borderBottom: "8px solid #c4c4c4",
  },
}

const GlobalHeaderNavComponent: FC<GlobalHeaderNavProps> = ({ items }) => (
  <div>
    {items.map(item => (
      <Link
        key={item.id}
        css={style.link}
        to={item.to}
        activeStyle={style.active}
      >
        {item.text}
      </Link>
    ))}
  </div>
)

export const GlobalHeaderNav = () => {
  const items: NavItem[] = [
    {
      id: 1,
      text: "Blog",
      to: "/",
    },
  ]

  return <GlobalHeaderNavComponent items={items} />
}
