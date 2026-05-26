import { ComponentProps, FC } from 'react';
import { PageBody } from '@/components/PageBody';
import { Container } from '@/styled-system/jsx';
import { Post, Tag } from '@/types';
import { Pagination } from '../Pagination';
import { PostEntries } from '../PostEntries';
import type { Locale } from '@/config/i18n';

type Props = {
  title: string;
  posts: Post[];
  tags: Tag[];
  pagination?: ComponentProps<typeof Pagination>;
  locale?: Locale;
};

export const PostsPageBody: FC<Props> = ({
  title,
  posts,
  tags,
  pagination,
  locale,
}) => {
  return (
    <PageBody title={title} tags={tags} locale={locale}>
      <Container mt="16px" mb="32px">
        <PostEntries posts={posts} locale={locale} />
      </Container>
      {pagination && <Pagination {...pagination} locale={locale} />}
    </PageBody>
  );
};
