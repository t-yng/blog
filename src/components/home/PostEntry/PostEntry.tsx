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
    <div className={style.postEntry} data-testid="post-entry">
        <div className={style.date}>{formatDate(post.date)}</div>
        <Link href={`/post/${post.slug}`} decoration={false} prefetch={false}>
            <h3 className={style.title}>{post.title}</h3>
        </Link>
        <Tags tags={post.tags} className={style.tags} />
    </div>
);
