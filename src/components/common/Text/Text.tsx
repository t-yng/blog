import { CSSProperties, css, cx } from 'linaria';
import { FC, PropsWithChildren, createElement } from 'react';
import { screen } from '@/styles/media';
import * as token from '@/styles/token';

type Props = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  fontSize?:
    | keyof typeof token.fontSize
    | {
        sm?: keyof typeof token.fontSize;
        md?: keyof typeof token.fontSize;
        lg?: keyof typeof token.fontSize;
      };
  fontWeight?: CSSProperties['fontWeight'];
  color?: CSSProperties['color'];
  lineHeight?: CSSProperties['lineHeight'];
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
      className: cx(text, className),
      style: {
        '--font-size':
          typeof fontSize !== 'object' ? token.fontSize[fontSize] : undefined,
        '--font-size-sm': (() => {
          if (typeof fontSize === 'object') {
            if (fontSize.sm) {
              return token.fontSize[fontSize.sm];
            } else {
              return undefined;
            }
          } else {
            return token.fontSize[fontSize];
          }
        })(),
        '--font-size-md': (() => {
          if (typeof fontSize === 'object') {
            if (fontSize.md) {
              return token.fontSize[fontSize.md];
            } else if (fontSize.sm) {
              return token.fontSize[fontSize.sm];
            } else {
              return undefined;
            }
          } else {
            return token.fontSize[fontSize];
          }
        })(),
        '--font-size-lg': (() => {
          if (typeof fontSize === 'object') {
            if (fontSize.lg) {
              return token.fontSize[fontSize.lg];
            } else if (fontSize.md) {
              return token.fontSize[fontSize.md];
            } else if (fontSize.sm) {
              return token.fontSize[fontSize.sm];
            } else {
              return undefined;
            }
          } else {
            return token.fontSize[fontSize];
          }
        })(),
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
