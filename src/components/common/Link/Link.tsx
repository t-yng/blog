import { FC, HTMLAttributes } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { css } from '@emotion/react';

type LinkProps = NextLinkProps & {
    decoration?: boolean;
    anchorProps?: HTMLAttributes<HTMLAnchorElement>;
};

const style = {
    nonDecoration: css`
        text-decoration: none;
        color: inherit;
    `,
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
                css={decoration ? undefined : style.nonDecoration}
            >
                {children}
            </a>
        </NextLink>
    );
};
