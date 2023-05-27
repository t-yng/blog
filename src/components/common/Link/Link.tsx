import { ComponentProps, FC, PropsWithChildren } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { css } from '@linaria/core';

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
        // 子要素に任意のコンポーネントを差し込みたいのでlegacyBehaviorを指定
        // @see: https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
        <NextLink href={href} prefetch={prefetch} passHref legacyBehavior>
            <a
                {...rest}
                className={`${decoration ? '' : nonDecoration} ${
                    className ? className : ''
                }`}
            >
                {children}
            </a>
        </NextLink>
    );
};

export const nonDecoration = css`
    text-decoration: none;
    color: inherit;
`;
