import { FC, PropsWithChildren } from 'react';
import { css } from '@linaria/core';
import { profile } from '@/config/profile';
import { Tag, SeoMetadata } from '@/types';
import { GlobalHeader, Sidebar, Seo } from '@/components/common';
import { colors } from '@/styles/token';
import { Heading } from '../Heading';

export type LayoutProps = PropsWithChildren<{
  tags: Tag[];
  seoMetadata: SeoMetadata;
  title?: string;
  pt?: string;
  pb?: string;
  mpt?: string;
  mpb?: string;
}>;

export const Layout: FC<LayoutProps> = ({
  children,
  tags,
  seoMetadata,
  title = '',
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
        <main className={content}>
          {title && (
            <Heading level={1} className={titleCss}>
              {title}
            </Heading>
          )}
          {children}
        </main>
        <Sidebar tags={tags} profile={profile} />
      </div>
    </div>
  );
};

const titleCss = css`
  padding-left: 1rem;
`;

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
