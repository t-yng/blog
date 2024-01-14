import { FC, PropsWithChildren } from 'react';
import { css } from '@linaria/core';
import { colors } from '@/styles/token';
import { Box } from '../Box';

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
    <Box pt="10px" pr="4px" pb="6px" pl="12px">
      {children}
    </Box>
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
