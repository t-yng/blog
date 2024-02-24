import { FC } from 'react';
import { css } from '@/styled-system/css';
import { Link } from '@/components/Link/Link';
import { Tags } from '@/components/Tags/Tags';
import { Post } from '@/types/Post';
import { formatDate } from '@/lib/format';

import { Text } from '@/components/Text';
import { Container } from '@/components/Container';

interface PostEntryProps {
  post: Post;
}

export const PostEntry: FC<PostEntryProps> = ({ post }) => (
  <Container py="20px" px="24px" data-testid="post-entry">
    <Link
      href={`/post/${post.slug}`}
      prefetch={false}
      className={linkOverlay}
      aria-labelledby={`post-title-${post.id}`}
      title={post.title}
    />
    <Text as="h2" fontSize={{ base: 'md', md: 'xl' }}>
      {post.title}
    </Text>
    <time className={date}>
      <Text as="span" color="black3" fontSize="sm">
        {formatDate(post.date)}
      </Text>
    </time>
    <Tags tags={post.tags} className={tags} />
  </Container>
);

const date = css({
  display: 'block',
  marginTop: '4px',
});

const tags = css({
  position: 'relative',
  marginTop: '8px',
});

const linkOverlay = css({
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});
