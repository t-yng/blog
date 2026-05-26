import { FC } from 'react';
import { css } from '@/styled-system/css';
import { Link } from '@/components/Link/Link';
import { Tags } from '@/components/Tags/Tags';
import { Post } from '@/types/Post';
import { formatDate } from '@/lib/format';
import { createPostLink } from '@/lib/link';
import { Text } from '@/components/Text';
import { Container } from '@/components/Container';
import type { Locale } from '@/config/i18n';

interface PostEntryProps {
  post: Post;
  locale?: Locale;
}

export const PostEntry: FC<PostEntryProps> = ({ post, locale }) => (
  <Container py="20px" px="24px" data-testid="post-entry">
    <Link
      href={createPostLink(post.slug, locale)}
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
    <Tags tags={post.tags} className={tags} locale={locale} />
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
