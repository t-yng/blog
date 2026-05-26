import { FC, Fragment } from 'react';
import { css } from '@/styled-system/css';
import { Post } from '@/types';
import { PostEntry } from '../PostEntry';
import type { Locale } from '@/config/i18n';

type PostEntriesProps = {
  posts: Post[];
  className?: string;
  locale?: Locale;
};

export const PostEntries: FC<PostEntriesProps> = ({
  posts,
  className,
  locale,
}) => (
  <div className={`${postEntries} ${className}`}>
    {posts.map((post, i) => (
      <Fragment key={post.id}>
        <PostEntry post={post} locale={locale} />
        {i < posts.length - 1 && <hr className={border} />}
      </Fragment>
    ))}
  </div>
);

const postEntries = css({
  backgroundColor: 'white',
});

const border = css({
  border: 'none',
  height: '1px',
  backgroundColor: 'black4',
  margin: 0,
});
