import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Link } from './Common/Link';
import { Tags } from './Tags';
import { colors } from '../styles/color';
import { Post } from '../entities/Post';
import { formatDate } from '../lib/format';

interface PostEntryProps {
    post: Post;
}

const style = {
    postEntry: css`
        padding: 1rem;
    `,
    date: css`
        color: ${colors.black3};
        font-size: 0.85rem;
    `,
    title: css`
        margin-top: 0.5rem;
    `,
    tags: css`
        margin-top: 0.5rem;
    `,
};

export const PostEntry: FC<PostEntryProps> = ({ post }) => (
    <div css={style.postEntry}>
        <div css={style.date}>{formatDate(post.date)}</div>
        <Link href={`/posts/${post.slug}`} decoration={false}>
            <h3 css={style.title}>{post.title}</h3>
        </Link>
        <Tags tags={post.tags} css={style.tags} />
    </div>
);
