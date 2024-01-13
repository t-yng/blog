import { FC } from 'react';
import { css } from '@linaria/core';
import { Link } from '@/components/common/Link/Link';
import { Tags } from '@/components/common/Tags/Tags';
import { Post } from '@/types/Post';
import { formatDate } from '@/lib/format';
import { colors } from '@/styles/token';
import { Text } from '@/components/common/Text';

interface PostEntryProps {
  post: Post;
}

export const PostEntry: FC<PostEntryProps> = ({ post }) => (
  <article className={postEntry} data-testid="post-entry">
    <Link
      href={`/post/${post.slug}`}
      prefetch={false}
      className={linkOverlay}
      aria-labelledby={`post-title-${post.id}`}
      title={post.title}
    />
    <Text as="h2" fontSize={{ sm: 'md', md: 'xl' }}>
      {post.title}
    </Text>
    <time className={date}>
      <Text as="span" color={colors.black3} fontSize="sm">
        {formatDate(post.date)}
      </Text>
    </time>
    <Tags tags={post.tags} className={tags} />
  </article>
);

const postEntry = css`
  position: relative;
  padding: 20px 24px;
`;

const date = css`
  display: block;
  margin-top: 4px;
`;

const tags = css`
  position: relative;
  margin-top: 8px;
`;

const linkOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
`;
