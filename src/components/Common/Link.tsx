import React, { FC } from 'react';
import { Link as GaLink, GatsbyLinkProps } from 'gatsby';
import { css } from '@emotion/core';

interface LinkProps<TState> extends Omit<GatsbyLinkProps<TState>, 'ref'> {
    decoration: boolean;
}

type LinkComponent<TState = {}> = FC<LinkProps<TState>>;

const style = {
    nonDecoration: css`
        text-decoration: none;
        color: inherit;
    `,
};

export const Link: LinkComponent = ({
    children,
    decoration = true,
    ...others
}) => {
    return (
        <GaLink css={decoration ? undefined : style.nonDecoration} {...others}>
            {children}
        </GaLink>
    );
};
