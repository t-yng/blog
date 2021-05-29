import { FC, HTMLAttributes } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = NextLinkProps & {
    decoration?: boolean;
    anchorProps?: HTMLAttributes<HTMLAnchorElement>;
};

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
                className={`${decoration ? '' : 'no-underline text-current'}`}
            >
                {children}
            </a>
        </NextLink>
    );
};
