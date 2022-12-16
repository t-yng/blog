import { ComponentProps, FC, PropsWithChildren } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import * as style from './Link.css';

type LinkProps = PropsWithChildren<{
    decoration?: boolean;
}> &
    ComponentProps<'a'> &
    NextLinkProps;

export const Link: FC<LinkProps> = ({
    decoration = true,
    href,
    children,
    ...rest
}) => {
    return (
        // 子要素に任意のコンポーネントを差し込みたいのでlegacyBehaviorを指定
        // @see: https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
        <NextLink href={href} passHref legacyBehavior>
            <a
                {...rest}
                className={decoration ? undefined : style.nonDecoration}
            >
                {children}
            </a>
        </NextLink>
    );
};
