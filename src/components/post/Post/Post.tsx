import { FC } from 'react';
import { Post as PostEntity } from '@/entities/Post';
import { Tags } from '@/components/common';
import { formatDate } from '@/lib/format';
import * as style from './Post.css';
import { heading1 } from '@/styles/typography.css';

import 'prismjs/themes/prism-tomorrow.css';

type PostProps = {
    post: PostEntity;
};

export const Post: FC<PostProps> = ({ post }) => {
    return (
        <article className={style.post}>
            <header className={style.header}>
                <h1 className={heading1}>{post.title}</h1>
                <div className={style.date}>{formatDate(post.date)}</div>
                <Tags tags={post.tags} />
            </header>

            <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className={style.content}
                data-test="content"
            />
        </article>
    );
};
