import { FC, PropsWithChildren } from 'react';
import { profile } from '@/config/profile';
import { Tag, SeoMetadata } from '@/entities';
import { GlobalHeader, Sidebar, Seo } from '@/components/common';
import { css } from '@linaria/core';
import { colors } from '@/styles/color';

export type LayoutProps = PropsWithChildren<{
    tags: Tag[];
    seoMetadata: SeoMetadata;
}>;

export const Layout: FC<LayoutProps> = ({ children, tags, seoMetadata }) => {
    return (
        <div className={globals}>
            <Seo
                title={seoMetadata.title}
                description={seoMetadata.description}
                author={seoMetadata.author}
                ogp={seoMetadata.ogp}
            />
            <GlobalHeader />
            <div className={main} tabIndex={-1}>
                <main className={content}>{children}</main>
                <Sidebar tags={tags} profile={profile} />
            </div>
        </div>
    );
};

export const main = css`
    display: grid;
    grid-template-columns: auto 240px;
    grid-gap: 3rem;
    margin: 0 auto;
    max-width: 1152px;
    padding: 2rem 20px;
    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`;

export const content = css`
    overflow: auto;
`;

const globals = css`
    :global() {
        body {
            background-color: ${colors.background};
            color: ${colors.textBlack};
            font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
                'Hiragino Sans', Meiryo, sans-serif;
            margin: 0;
        }
        h1,
        h2,
        h3 {
            margin: 0;
        }

        p,
        ul {
            line-height: 1.8;
        }
    }
`;
