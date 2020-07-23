import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
    title?: string;
    author?: string;
    description?: string;
}

export const SEO: FC<SeoProps> = ({ title, description }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        author,
    } = site.siteMetadata;

    const seo = {
        title: title ?? defaultTitle,
        author: author,
        description: description ?? defaultDescription,
        url: `${siteUrl}${pathname}`,
    };

    return (
        <Helmet title={seo.title}>
            <html lang="ja" />
            <meta name="author" content={seo.author} />
            <meta name="description" content={seo.description} />
        </Helmet>
    );
};

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                author: author
                defaultTitle: title
                defaultDescription: description
                siteUrl: url
            }
        }
    }
`;
