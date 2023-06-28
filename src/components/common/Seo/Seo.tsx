import React, { FC } from 'react';
import Head from 'next/head';

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
      <Head>
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={description} />
      </Head>
      {ogp != null && (
        <Head>
          <meta property="og:url" content={ogp.url} />
          <meta property="og:type" content={ogp.type} />
          <meta property="og:title" content={ogp.title} />
          <meta property="og:description" content={ogp.description} />
          <meta property="og:site_name" content={ogp.siteName} />
          <meta property="og:image" content={ogp.image} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      )}
    </React.Fragment>
  );
};
