import '@/styles/style.linaria.global';
import { FC, PropsWithChildren } from 'react';
import { css } from '@linaria/core';
import { profile } from '@/config/profile';
import { Tag, SeoMetadata } from '@/entities';
import { GlobalHeader, Sidebar, Seo } from '@/components/common';

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
