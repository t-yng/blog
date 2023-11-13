import { FC, PropsWithChildren } from 'react';
import { css } from '@linaria/core';
import { profile } from '@/config/profile';
import { Tag, SeoMetadata } from '@/entities';
import { GlobalHeader, Sidebar, Seo } from '@/components/common';
import { colors } from '@/styles/color';

export type LayoutProps = PropsWithChildren<{
  tags: Tag[];
  seoMetadata: SeoMetadata;
  pt?: string;
  pb?: string;
  mpt?: string;
  mpb?: string;
}>;

export const Layout: FC<LayoutProps> = ({
  children,
  tags,
  seoMetadata,
  pt = '2rem',
  pb = '2rem',
  mpt = '1rem',
  mpb = '0',
}) => {
  return (
    <div
      className={globals}
      style={
        {
          '--layout-main-pt': pt,
          '--layout-main-pb': pb,
          '--layout-main-mpt': mpt,
          '--layout-main-mpb': mpb,
        } as React.CSSProperties
      }
    >
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
  padding-top: var(--layout-main-pt);
  padding-bottom: var(--layout-main-pb);

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    padding-top: var(--layout-main-mpt);
    padding-bottom: var(--layout-main-mpb);
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
