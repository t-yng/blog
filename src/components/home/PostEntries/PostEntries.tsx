import React, { FC, Fragment } from 'react';
import { css } from '@emotion/react';
import { compareDesc } from 'date-fns';
import { Post } from '../../../entities/Post';
import { colors } from '../../../styles/color';
import { PostEntry } from '../PostEntry/PostEntry';

const style = {
    postEntries: css`
        background-color: ${colors.white};
    `,
    border: css`
        border: none;
        height: 1px;
        background-color: ${colors.black4};
    `,
};

type PostEntriesProps = {
    posts: Post[];
};

const sortPostsByDateDesc = (posts: Post[]): Post[] => {
    return posts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );
};

export const PostEntries: FC<PostEntriesProps> = ({ posts }) => (
    <div css={style.postEntries}>
        {sortPostsByDateDesc(posts).map((post, i) => (
            <Fragment key={post.id}>
                <PostEntry post={post} />
                {i < posts.length - 1 && <hr css={style.border} />}
            </Fragment>
        ))}
    </div>
);
