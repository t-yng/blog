import React, { FC } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { colors } from "../styles/color"

interface NavItem {
  id: number
  text: string
  to: string
}

interface GlobalHeaderNavProps {
  items: NavItem[]
}

const style = {
  root: css`
    background-color: ${colors.white};
    padding: 0.5rem 9rem 1rem 9rem;
    border-bottom: 0.5px solid ${colors.black4};
  `,
  link: css`
    text-decoration: none;
    padding-bottom: 1rem;
    &:hover {
      border-bottom: 5px solid ${colors.accent};
    }
  `,
  active: {
    borderBottom: `5px solid ${colors.accent}`,
    color: colors.accent,
    fontWeight: 'bold',
  },
}

const GlobalHeaderNavComponent: FC<GlobalHeaderNavProps> = ({ items }) => (
  <div css={style.root}>
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
