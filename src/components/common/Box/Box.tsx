import { FC, PropsWithChildren, createElement } from 'react';
import { cx } from 'linaria';
import {
  createPaddingCssVariables,
  hasSmPadding,
  padding,
  mdPadding,
  smPadding,
  hasMdPadding,
  hasLgPadding,
  lgPadding,
  PaddingProps,
} from './padding';

type Props = PropsWithChildren<
  {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    style?: React.CSSProperties;
  } & PaddingProps
>;

export const Box: FC<Props> = ({
  as = 'div',
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  style,
  className,
  children,
}) => {
  return createElement(
    as,
    {
      className: cx(
        padding,
        hasSmPadding({ p, pt, pr, pb, pl, px, py }) && smPadding,
        hasMdPadding({ p, pt, pr, pb, pl, px, py }) && mdPadding,
        hasLgPadding({ p, pt, pr, pb, pl, px, py }) && lgPadding,
        className
      ),
      style: {
        ...createPaddingCssVariables({ p, pt, pr, pb, pl, px, py }),
        ...style,
      },
    },
    children
  );
};
