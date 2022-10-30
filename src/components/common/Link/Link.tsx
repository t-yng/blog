import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import * as style from './Link.css';

type LinkProps = PropsWithChildren<
    NextLinkProps & {
        decoration?: boolean;
        anchorProps?: HTMLAttributes<HTMLAnchorElement>;
    }
>;

export const Link: FC<LinkProps> = ({
    decoration = true,
    children,
    anchorProps,
    ...others
}) => {
    return (
        // 子要素に任意のコンポーネントを差し込みたいのでlegacyBehaviorを指定
        // @see: https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
        <NextLink {...others} passHref legacyBehavior>
            <a
                {...anchorProps}
                className={decoration ? undefined : style.nonDecoration}
            >
                {children}
            </a>
        </NextLink>
    );
};
