import { FC, PropsWithChildren } from 'react';
import { css } from '@linaria/core';
import { cx } from 'linaria';
import { colors } from '@/styles/color';
import { Flex } from '@/components/common/Flex';

type PageItemProps = PropsWithChildren<{
  className?: string;
}>;

export const PageItem: FC<PageItemProps> = ({
  children,
  className,
  ...others
}) => (
  <Flex justifyContent="center" className={cx(item, className)} {...others}>
    {children}
  </Flex>
);

const item = css`
  color: ${colors.black1};
  font-size: 1rem;
  position: relative;

  &:hover {
    color: ${colors.accent};
    cursor: pointer;
  }
`;
