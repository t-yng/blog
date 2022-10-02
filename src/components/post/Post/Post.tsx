import { FC } from 'react';
import { Post as PostEntity } from '@/entities/Post';
import { Tags } from '@/components/common';
import * as style from './Post.css';
import { formatDate } from '@/lib/format';
import 'prismjs/themes/prism-tomorrow.css';

type PostProps = {
    post: PostEntity;
};

export const Post: FC<PostProps> = ({ post }) => {
    return (
        <div className={style.post}>
            <header className={style.header}>
                <h1>{post.title}</h1>
                <div className={style.date}>{formatDate(post.date)}</div>
                <Tags tags={post.tags} />
            </header>

            <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className={style.content}
                data-test="content"
            />
        </div>
    );
};
