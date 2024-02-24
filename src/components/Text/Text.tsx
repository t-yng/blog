import { FC, PropsWithChildren, createElement } from 'react';
import { StyleProps } from '@/styled-system/types';
import { css, cx } from '@/styled-system/css';

type Props = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  fontSize?: StyleProps['fontSize'];
  fontWeight?: StyleProps['fontWeight'];
  color?: StyleProps['color'];
  lineHeight?: StyleProps['lineHeight'];
  className?: string;
}>;

export const Text: FC<Props> = ({
  as = 'span',
  fontSize = 'md',
  fontWeight,
  color,
  lineHeight,
  className,
  children,
}) => {
  return createElement(
    as,
    {
      className: cx(
        css({ fontSize, fontWeight, color, lineHeight }),
        className
      ),
    },
    children
  );
};
