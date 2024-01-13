export type OGP = {
  url: string;
  type: 'website' | 'article';
  title: string;
  description: string;
  siteName: string;
  image: string;
};

export type SeoMetadata = {
  title: string;
  author: string;
  description: string;
  url: string;
  ogp?: OGP;
};
