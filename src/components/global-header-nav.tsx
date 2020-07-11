import React, { FC } from "react"

interface NavItem {
  id: number
  text: string
}

interface GlobalHeaderNavProps {
  items: NavItem[]
}

const GlobalHeaderNavComponent: FC<GlobalHeaderNavProps> = ({ items }) => (
  <div>
    {items.map(item => (
      <div key={item.id}>{item.text}</div>
    ))}
  </div>
)

export const GlobalHeaderNav = () => {
  const items: NavItem[] = [
    {
      id: 1,
      text: "Blog",
    },
  ]

  return <GlobalHeaderNavComponent items={items} />
}
