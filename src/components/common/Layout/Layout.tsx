import { FC, PropsWithChildren } from 'react';
import { css } from '@/styled-system/css';
import { profile } from '@/config/profile';
import { Tag, SeoMetadata } from '@/types';
import { GlobalHeader, Sidebar, Seo } from '@/components/common';
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

const titleCss = css({
  paddingLeft: '1rem',
});

export const main = css({
  display: 'grid',
  gridTemplateColumns: 'auto 240px',
  gridGap: '3rem',
  margin: '0 auto',
  maxWidth: '1152px',
  paddingTop: 'var(--layout-main-pt)',
  paddingBottom: 'var(--layout-main-pb)',

  '@media (max-width: 850px)': {
    gridTemplateColumns: '1fr',
    paddingTop: 'var(--layout-main-mpt)',
    paddingBottom: 'var(--layout-main-mpb)',
  },
});

export const content = css({
  overflow: 'auto',
});
