import { CSSProperties, FC, PropsWithChildren, createElement } from 'react';
import { css, cx } from 'linaria';

type Padding =
  | CSSProperties['padding']
  | {
      sm?: CSSProperties['padding'];
      md?: CSSProperties['padding'];
      lg?: CSSProperties['padding'];
    };

type Props = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  direction?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
  p?: Padding;
  px?: Padding;
  py?: Padding;
}>;

export const Flex: FC<Props> = ({
  as = 'div',
  direction: flexDirection,
  justifyContent,
  alignItems,
  gap,
  p,
  px,
  py,
  className,
  children,
}) => {
  return createElement(
    as,
    {
      className: cx(flex, className),
      style: {
        '--flex-direction': flexDirection,
        '--justify-content': justifyContent,
        '--align-items': alignItems,
        '--gap': gap,
        '--padding': p,
        '--padding-right': px || p || '',
        '--padding-left': px || p || '',
        '--padding-top': py || p || '',
        '--padding-bottom': py || p || '',
      },
    },
    children
  );
};

const flex = css`
  display: flex;
  flex-direction: var(--flex-direction, initial);
  justify-content: var(--justify-content, initial);
  align-items: var(--align-items, initial);
  gap: var(--gap, initial);
  padding: var(--padding, initial);
  padding-top: var(--padding-top, initial);
  padding-right: var(--padding-right, initial);
  padding-bottom: var(--padding-bottom, initial);
  padding-left: var(--padding-left, initial);
`;
