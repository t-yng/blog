import { FC } from 'react';
import * as style from './PageItem.css';

type PageItemProps = {
    className?: string;
};

export const PageItem: FC<PageItemProps> = ({
    children,
    className,
    ...others
}) => (
    <div className={`${style.item} ${className}`} {...others}>
        {children}
    </div>
);
