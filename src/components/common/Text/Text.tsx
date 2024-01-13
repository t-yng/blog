import { CSSProperties, css, cx } from 'linaria';
import { FC, PropsWithChildren, createElement } from 'react';
import { screen } from '@/styles/media';

type Props = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  fontSize?:
    | CSSProperties['fontSize']
    | {
        sm?: CSSProperties['fontSize'];
        md?: CSSProperties['fontSize'];
        lg?: CSSProperties['fontSize'];
      };
  fontWeight?: CSSProperties['fontWeight'];
  color?: CSSProperties['color'];
  lineHeight?: CSSProperties['lineHeight'];
  className?: string;
}>;

export const Text: FC<Props> = ({
  as = 'span',
  fontSize,
  fontWeight,
  color,
  lineHeight,
  className,
  children,
}) => {
  return createElement(
    as,
    {
      className: cx(text, className),
      style: {
        '--font-size': typeof fontSize !== 'object' ? fontSize : undefined,
        '--font-size-sm': typeof fontSize === 'object' ? fontSize.sm : fontSize,
        '--font-size-md':
          typeof fontSize === 'object' ? fontSize.md || fontSize.sm : fontSize,
        '--font-size-lg':
          typeof fontSize === 'object'
            ? fontSize.lg || fontSize.md || fontSize.sm
            : fontSize,
        '--font-weight': fontWeight || '',
        '--color': color,
        '--line-height': lineHeight,
      },
    },
    children
  );
};

const text = css`
  font-size: var(--font-size, inherit);
  font-weight: var(--font-weight, revert);
  color: var(--color, inherit);
  line-height: var(--line-height, inherit);

  ${screen.sm} {
    font-size: var(--font-size-sm, inherit);
  }
  ${screen.md} {
    font-size: var(--font-size-md, inherit);
  }
  ${screen.lg} {
    font-size: var(--font-size-lg, inherit);
  }
`;
