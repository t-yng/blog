import { FC, PropsWithChildren } from 'react';
import { css } from '@/styled-system/css';

import { Container } from '../Container';

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
    <Container pt="10px" pr="4px" pb="6px" pl="12px">
      {children}
    </Container>
  </section>
);

const main = css({
  backgroundColor: 'white',
});

const header = css({
  backgroundColor: 'main',
  color: 'white',
  fontWeight: 'bold',
  padding: '4px 12px',
});
