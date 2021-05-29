import React, { FC } from 'react';
import { GlobalHeader } from '../GlobalHeader';
import { Sidebar } from '../Sidebar';
import { profile } from '../../../config/profile';
import { Tag } from '../../../entities/Tag';
import { SeoMetadata } from '../../../entities/SeoMetadata';
import { Seo } from '../Seo';

export type LayoutProps = {
    tags: Tag[];
    seoMetadata: SeoMetadata;
};

export const Layout: FC<LayoutProps> = ({ children, tags, seoMetadata }) => {
    return (
        <div>
            <Seo
                title={seoMetadata.title}
                description={seoMetadata.description}
                author={seoMetadata.author}
            />
            <GlobalHeader />
            <main className="grid grid-cols-1 gap-12 my-0 mx-auto max-w-screen-lg py-8 px-5 md:grid-cols-main-layout">
                <div className="overflow-auto">{children}</div>
                <Sidebar tags={tags} profile={profile} />
            </main>
        </div>
    );
};
