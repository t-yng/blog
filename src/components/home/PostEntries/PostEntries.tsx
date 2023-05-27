import { FC, Fragment } from 'react';
import { css } from '@linaria/core';
import { Post } from '@/entities';
import { colors } from '@/styles/color';
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

const postEntries = css`
    background-color: ${colors.white};
`;

const border = css`
    border: none;
    height: 1px;
    background-color: ${colors.black4};
    margin: 0;
`;
