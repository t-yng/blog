import { FC, Fragment } from 'react';
import { Post } from '../../../entities/Post';
import { PostEntry } from '../PostEntry/PostEntry';
import * as style from './PostEntries.css';

type PostEntriesProps = {
    posts: Post[];
    className?: string;
};

export const PostEntries: FC<PostEntriesProps> = ({ posts, className }) => (
    <div className={`${style.postEntries} ${className}`}>
        {posts.map((post, i) => (
            <Fragment key={post.id}>
                <PostEntry post={post} />
                {i < posts.length - 1 && <hr className={style.border} />}
            </Fragment>
        ))}
    </div>
);
