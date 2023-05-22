import { FC } from 'react';
import { css } from '@linaria/core';
import { Link } from '@/components/common/Link/Link';
import { Tags } from '@/components/common/Tags/Tags';
import { Post } from '@/entities/Post';
import { formatDate } from '@/lib/format';
import { colors } from '@/styles/color';

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
        <h2 id={`post-title-${post.id}`} className={title}>
            {post.title}
        </h2>
        <time className={date}>{formatDate(post.date)}</time>
        <Tags tags={post.tags} className={tags} />
    </article>
);

const postEntry = css`
    position: relative;
    padding: 20px 24px;
`;

const date = css`
    color: ${colors.black3};
    font-size: 0.85rem;
    display: block;
    margin-top: 4px;
`;

const title = css`
    font-size: 1.2rem;
    @media (max-width: 850px) {
        font-size: 1rem;
    }
`;

const tags = css`
    position: relative;
    margin-top: 0.5rem;
`;

const linkOverlay = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
`;
