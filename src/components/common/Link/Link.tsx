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
        <NextLink {...others} passHref>
            <a
                {...anchorProps}
                className={decoration ? undefined : style.nonDecoration}
            >
                {children}
            </a>
        </NextLink>
    );
};
