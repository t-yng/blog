import { FC, PropsWithChildren } from 'react';
import { profile } from '@/config/profile';
import { css } from '@/styled-system/css';
import { Tag } from '@/types';
import { StyleProps } from '@/styled-system/types';
import { Heading } from '../common/Heading';
import { Sidebar } from '../common/Sidebar';
import { Grid } from '../common/Grid';

type Props = PropsWithChildren<{
  title?: string;
  tags: Tag[];
  pt?: StyleProps['paddingTop'];
  pb?: StyleProps['paddingBottom'];
}>;

export const PageBody: FC<Props> = ({
  title,
  tags,
  pt = { base: '1rem', md: '2rem' },
  pb = { base: 0, md: '2rem' },
  children,
}) => {
  return (
    <Grid
      gridTemplateColumns={{ base: '1fr', md: 'auto 240px' }}
      gap="3rem"
      m="0 auto"
      maxWidth="1152px"
      pt={pt}
      pb={pb}
      tabIndex={-1}
    >
      <main className={main}>
        {title && (
          <Heading level={1} className={titleCss}>
            {title}
          </Heading>
        )}
        {children}
      </main>
      <Sidebar tags={tags} profile={profile} />
    </Grid>
  );
};

const titleCss = css({
  paddingLeft: '1rem',
});

export const main = css({
  overflow: 'auto',
});
