import React, { FC, PropsWithChildren } from 'react';
import { css, cx } from '@/styled-system/css';
import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';

type PageItemProps = PropsWithChildren<{
  highlight?: boolean;
  className?: string;
}>;

export const PageItem: FC<PageItemProps> = ({
  highlight = false,
  children,
  className,
  ...others
}) => (
  <Flex
    justify="center"
    className={cx(css(item, highlight && highlightStyle), className)}
    {...others}
  >
    <Text lineHeight="1.5">{children}</Text>
  </Flex>
);

const item = css.raw({
  color: 'black1',
  position: 'relative',

  '&:hover': {
    color: 'accent',
    cursor: 'pointer',
  },
});

const highlightStyle = css.raw({
  alignItems: 'center',
  backgroundColor: 'accent',
  borderRadius: '50%',
  color: 'white',
  height: '28px',
  padding: 0,
  width: '28px',

  '&:hover': {
    color: 'white',
    cursor: 'default',
  },
});
