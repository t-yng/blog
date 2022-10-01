import { FC } from 'react';
import * as style from './SidebarSection.css';

interface SidebarSectionProps {
    title: string;
    className?: string;
}

export const SidebarSection: FC<SidebarSectionProps> = ({
    children,
    title,
    className,
}) => (
    <section className={`${style.main} ${className}`}>
        <header className={style.header}>{title}</header>
        <div className={style.body}>{children}</div>
    </section>
);
