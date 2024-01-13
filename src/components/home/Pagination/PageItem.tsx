import React, { FC, PropsWithChildren } from 'react';
import { css } from '@linaria/core';
import { cx } from 'linaria';
import { colors } from '@/styles/color';
import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';

type PageItemProps = PropsWithChildren<{
  className?: string;
}>;

export const PageItem: FC<PageItemProps> = ({
  children,
  className,
  ...others
}) => (
  <Flex justifyContent="center" className={cx(item, className)} {...others}>
    <Text fontSize="1rem" lineHeight="1.5">
      {children}
    </Text>
  </Flex>
);

const item = css`
  color: ${colors.black1};
  position: relative;

  &:hover {
    color: ${colors.accent};
    cursor: pointer;
  }
`;
