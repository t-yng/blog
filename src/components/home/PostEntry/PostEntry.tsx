import { FC } from 'react';
import { Link } from '../../common/Link/Link';
import { Tags } from '../../common/Tags/Tags';
import { Post } from '../../../entities/Post';
import { formatDate } from '../../../lib/format';
import * as style from './PostEntry.css';

interface PostEntryProps {
    post: Post;
}

export const PostEntry: FC<PostEntryProps> = ({ post }) => (
    <article className={style.postEntry} data-testid="post-entry">
        <Link href={`/post/${post.slug}`} decoration={false} prefetch={false}>
            <h2 className={style.title}>{post.title}</h2>
        </Link>
        <time className={style.date}>{formatDate(post.date)}</time>
        <Tags tags={post.tags} className={style.tags} />
    </article>
);
