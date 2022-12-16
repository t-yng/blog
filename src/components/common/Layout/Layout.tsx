import { FC, PropsWithChildren } from 'react';
import { profile } from '@/config/profile';
import { Tag, SeoMetadata } from '@/entities';
import { GlobalHeader, Sidebar, Seo } from '@/components/common';
import * as style from './Layout.css';

export type LayoutProps = PropsWithChildren<{
    tags: Tag[];
    seoMetadata: SeoMetadata;
}>;

export const Layout: FC<LayoutProps> = ({ children, tags, seoMetadata }) => {
    return (
        <div>
            <Seo
                title={seoMetadata.title}
                description={seoMetadata.description}
                author={seoMetadata.author}
                ogp={seoMetadata.ogp}
            />
            <GlobalHeader />
            <main className={style.main} tabIndex={-1}>
                <div className={style.content}>{children}</div>
                <Sidebar tags={tags} profile={profile} />
            </main>
        </div>
    );
};
