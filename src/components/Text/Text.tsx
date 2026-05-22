import { createElement } from 'react';
import { JsxStyleProps } from '@/styled-system/types';
import { css, cx } from '@/styled-system/css';
import type { FC, JSX, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  fontSize?: JsxStyleProps['fontSize'];
  fontWeight?: JsxStyleProps['fontWeight'];
  color?: JsxStyleProps['color'];
  lineHeight?: JsxStyleProps['lineHeight'];
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
