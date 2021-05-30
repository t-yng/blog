import React, { FC, Fragment } from 'react';
import { Post } from '../../../entities/Post';
import { PostEntry } from '../PostEntry/PostEntry';
import classNames from 'classnames';

type PostEntriesProps = {
    posts: Post[];
    className?: string;
};

export const PostEntries: FC<PostEntriesProps> = ({
    posts,
    className,
    ...others
}) => (
    <div className={classNames(className, 'bg-white')} {...others}>
        {posts.map((post, i) => (
            <Fragment key={post.id}>
                <PostEntry post={post} />
                {i < posts.length - 1 && (
                    <hr className="border-none h-px bg-horizon" />
                )}
            </Fragment>
        ))}
    </div>
);
