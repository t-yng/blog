import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import { styled } from 'linaria/react';
import { screen } from '@/styles/media';
import {
  hasSmPadding,
  hasMdPadding,
  hasLgPadding,
  PaddingProps,
  getPadding,
  getPaddingBottom,
  getPaddingLeft,
  getPaddingRight,
  getPaddingTop,
} from './padding';

type Props = PropsWithChildren<
  {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
  } & PaddingProps &
    ComponentPropsWithoutRef<'div'>
>;

export const Box: FC<Props> = (props: Props) => {
  const { children, ...rest } = props;

  if (hasSmPadding(props) || hasMdPadding(props) || hasLgPadding(props)) {
    return <ResponsiveBox {...rest}>{children}</ResponsiveBox>;
  }

  return <BaseBox {...rest}>{children}</BaseBox>;
};

const BaseBox = styled.div<Props>`
  padding: ${(props) => getPadding(props)};
  padding-top: ${(props) => getPaddingTop(props)};
  padding-right: ${(props) => getPaddingRight(props)};
  padding-bottom: ${(props) => getPaddingBottom(props)};
  padding-left: ${(props) => getPaddingLeft(props)};
`;

const ResponsiveBox = styled.div<Props>`
  ${screen.sm} {
    padding: ${(props) => getPadding(props)};
    padding-top: ${(props) => getPaddingTop(props)};
    padding-right: ${(props) => getPaddingRight(props)};
    padding-bottom: ${(props) => getPaddingBottom(props)};
    padding-left: ${(props) => getPaddingLeft(props)};
  }

  ${screen.md} {
    padding: ${(props) => getPadding(props)};
    padding-top: ${(props) => getPaddingTop(props)};
    padding-right: ${(props) => getPaddingRight(props)};
    padding-bottom: ${(props) => getPaddingBottom(props)};
    padding-left: ${(props) => getPaddingLeft(props)};
  }

  ${screen.lg} {
    padding: ${(props) => getPadding(props)};
    padding-top: ${(props) => getPaddingTop(props)};
    padding-right: ${(props) => getPaddingRight(props)};
    padding-bottom: ${(props) => getPaddingBottom(props)};
    padding-left: ${(props) => getPaddingLeft(props)};
  }
`;
