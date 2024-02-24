import { ComponentProps, FC } from 'react';
import { PageBody } from '@/components/PageBody';
import { Container } from '@/styled-system/jsx';
import { Post, Tag } from '@/types';
import { Pagination } from '../Pagination';
import { PostEntries } from '../PostEntries';

type Props = {
  title: string;
  posts: Post[];
  tags: Tag[];
  pagination?: ComponentProps<typeof Pagination>;
};

export const PostsPageBody: FC<Props> = ({
  title,
  posts,
  tags,
  pagination,
}) => {
  return (
    <PageBody title={title} tags={tags}>
      <Container mt="16px" mb="32px">
        <PostEntries posts={posts} />
      </Container>
      {pagination && <Pagination {...pagination} />}
    </PageBody>
  );
};
