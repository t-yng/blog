import { FC, PropsWithChildren } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import * as style from './Link.css';

type LinkProps = PropsWithChildren<{
    decoration?: boolean;
}> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    NextLinkProps;

export const Link: FC<LinkProps> = ({
    decoration = true,
    children,
    className,
    ...others
}) => {
    return (
        <NextLink
            {...others}
            passHref
            className={`${className} ${
                decoration ? undefined : style.nonDecoration
            }`}
        >
            {children}
        </NextLink>
    );
};
