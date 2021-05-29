import { FC, HTMLAttributes } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import classNames from 'classnames';

type LinkProps = NextLinkProps & {
    decoration?: boolean;
    cursor?: 'default' | 'pointer';
    anchorProps?: HTMLAttributes<HTMLAnchorElement>;
};

export const Link: FC<LinkProps> = ({
    decoration = true,
    cursor = 'pointer',
    children,
    anchorProps,
    ...others
}) => {
    return (
        <NextLink {...others} passHref>
            <a
                {...anchorProps}
                className={classNames({
                    'no-underline text-current': !decoration,
                    'cursor-default': cursor === 'default',
                })}
            >
                {children}
            </a>
        </NextLink>
    );
};
