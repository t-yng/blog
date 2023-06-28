import { FC, PropsWithChildren } from 'react';
import { css } from '@linaria/core';
import { colors } from '@/styles/color';

type PageItemProps = PropsWithChildren<{
  className?: string;
}>;

export const PageItem: FC<PageItemProps> = ({
  children,
  className,
  ...others
}) => (
  <div className={`${item} ${className}`} {...others}>
    {children}
  </div>
);

const item = css`
  color: ${colors.black1};
  font-size: 1rem;
  padding: 5px 15px;
  position: relative;

  &:hover {
    color: ${colors.accent};
    cursor: pointer;
  }
`;
