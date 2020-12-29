import React, { FC } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { css } from '@emotion/core';

type LinkProps = NextLinkProps & {
    decoration?: boolean;
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
    ...others
}) => {
    return (
        <NextLink {...others}>
            <a css={decoration ? undefined : style.nonDecoration}>{children}</a>
        </NextLink>
    );
};
