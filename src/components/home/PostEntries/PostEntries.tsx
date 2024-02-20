import { FC, Fragment } from 'react';
import { css } from '@/styled-system/css';
import { Post } from '@/types';

import { PostEntry } from '../PostEntry';

type PostEntriesProps = {
  posts: Post[];
  className?: string;
};

export const PostEntries: FC<PostEntriesProps> = ({ posts, className }) => (
  <div className={`${postEntries} ${className}`}>
    {posts.map((post, i) => (
      <Fragment key={post.id}>
        <PostEntry post={post} />
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
