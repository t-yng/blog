import React, { FC } from 'react';
import { Link } from '../../common/Link/Link';
import { Tags } from '../../common/Tags/Tags';
import { Post } from '../../../entities/Post';
import { formatDate } from '../../../lib/format';

interface PostEntryProps {
    post: Post;
}

export const PostEntry: FC<PostEntryProps> = ({ post }) => (
    <div className="p-4">
        <div className="text-sm text-post-date">{formatDate(post.date)}</div>
        <Link href={`/post/${post.slug}`} decoration={false}>
            <h3 className="mt-2">{post.title}</h3>
        </Link>
        <Tags tags={post.tags} className="mt-2" />
    </div>
);
