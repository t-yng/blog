import React, { FC } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { css } from '@emotion/core';

type LinkProps = NextLinkProps & {
    text: string;
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
    text,
    ...others
}) => {
    return (
        <NextLink
            css={decoration ? undefined : style.nonDecoration}
            {...others}
        >
            <a>{text}</a>
        </NextLink>
    );
};
