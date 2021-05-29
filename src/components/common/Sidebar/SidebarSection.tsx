import React, { FC } from 'react';
import classnames from 'classnames';

interface SidebarSectionProps {
    title: string;
    className?: string;
}

export const SidebarSection: FC<SidebarSectionProps> = ({
    children,
    title,
    className,
    ...others
}) => (
    <section {...others} className={classnames(className, 'bg-sidebar')}>
        <header className="text-sidebar-header bg-sideber-header font-bold py-1 px-3">
            {title}
        </header>
        <div className="py-2 pr-1 pl-3">{children}</div>
    </section>
);
