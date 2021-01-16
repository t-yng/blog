import { FC } from 'react';
import { Helmet } from 'react-helmet';

export type SeoProps = {
    title: string;
    description: string;
    author: string;
};

export const Seo: FC<SeoProps> = ({ title, description, author }) => (
    <Helmet title={title}>
        <html lang="ja" />
        <meta name="author" content={author} />
        <meta name="description" content={description} />
    </Helmet>
);
