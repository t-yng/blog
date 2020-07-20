import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface SeoProps {
    title?: string;
    description?: string;
}

export const SEO: FC<SeoProps> = ({
    title,
    description,
}) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;

    const seo = {
        title: title ?? defaultTitle,
        description: description ?? defaultDescription,
        url: `${siteUrl}${pathname}`,
    };

    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
        </Helmet>
    );
};

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl: url
            }
        }
    }
`;
