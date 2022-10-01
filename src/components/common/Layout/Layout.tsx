import { FC } from 'react';
import { GlobalHeader } from '../GlobalHeader';
import { Sidebar } from '../Sidebar';
import { profile } from '../../../config/profile';
import { Tag } from '../../../entities/Tag';
import { SeoMetadata } from '../../../entities/SeoMetadata';
import { Seo } from '../Seo';
import * as style from './Layout.css';

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
                ogp={seoMetadata.ogp}
            />
            <GlobalHeader />
            <main className={style.main}>
                <div className={style.content}>{children}</div>
                <Sidebar tags={tags} profile={profile} />
            </main>
        </div>
    );
};
