import React from 'react';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export type OGP = {
    url: string;
    type: 'website' | 'article';
    title: string;
    description: string;
    siteName: string;
    image: string;
};

export type SeoProps = {
    title: string;
    description: string;
    author: string;
    ogp?: OGP;
};

export const Seo: FC<SeoProps> = ({ title, description, author, ogp }) => {
    return (
        <React.Fragment>
            <Helmet title={title}>
                <html lang="ja" />
                <meta name="author" content={author} />
                <meta name="description" content={description} />
            </Helmet>
            {ogp != null && (
                <Helmet>
                    <meta name="og:url" content={ogp.url} />
                    <meta name="og:type" content={ogp.type} />
                    <meta name="og:title" content={ogp.title} />
                    <meta name="og:description" content={ogp.description} />
                    <meta name="og:site_name" content={ogp.siteName} />
                    <meta name="og:image" content={ogp.image} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Helmet>
            )}
        </React.Fragment>
    );
};
