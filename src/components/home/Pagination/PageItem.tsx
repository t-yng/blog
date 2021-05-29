import { FC } from 'react';
import classNames from 'classnames';

type PageItemProps = {
    highlight?: boolean;
    className?: string;
};

export const PageItem: FC<PageItemProps> = ({
    children,
    highlight,
    ...others
}) => (
    <div
        className={classNames('relative', {
            'flex justify-center items-center bg-accent text-white rounded-circle h-7 w-7 p-0 mx-4 cursor-default': highlight,
            'py-1 px-4 relative hover:text-accent hover:cursor-pointer': !highlight,
        })}
        {...others}
    >
        {children}
    </div>
);
