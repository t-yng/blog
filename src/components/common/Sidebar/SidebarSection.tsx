import { FC, PropsWithChildren } from 'react';
import { css } from '@linaria/core';
import { colors } from '@/styles/color';

type SidebarSectionProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export const SidebarSection: FC<SidebarSectionProps> = ({
  children,
  title,
  className,
}) => (
  <section className={`${main} ${className}`}>
    <header className={header}>{title}</header>
    <div className={body}>{children}</div>
  </section>
);

const main = css`
  background-color: ${colors.white};
`;

const header = css`
  background-color: ${colors.main};
  color: ${colors.white};
  font-weight: bold;
  padding: 4px 12px;
`;

const body = css`
  padding: 10px 4px 6px 12px;
`;
