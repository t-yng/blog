import { ComponentProps, FC, PropsWithChildren } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import clsx from 'clsx';
import { css } from '@/styled-system/css';

type LinkProps = PropsWithChildren<{
  decoration?: boolean;
}> &
  ComponentProps<'a'> &
  Pick<NextLinkProps, 'href' | 'prefetch'>;

export const Link: FC<LinkProps> = ({
  decoration = true,
  href,
  children,
  prefetch,
  className,
  ...rest
}) => {
  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      {...rest}
      className={clsx(
        {
          [nonDecoration]: !decoration,
        },
        className
      )}
    >
      {children}
    </NextLink>
  );
};

export const nonDecoration = css({
  textDecoration: 'none',
  color: 'inherit',
});
