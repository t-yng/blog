import { FC } from 'react';
import ReactMarkdown, { Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import { Post as PostEntity } from '../../../entities/Post';
import { Tags } from '../../common/Tags/Tags';
import * as style from './Post.css';
import { formatDate } from '../../../lib/format';
import { Code } from '../Code';

type PostProps = {
    post: PostEntity;
};

const components: Options['components'] = {
    img: ({ src, width, height, alt }) => {
        if (src == null || src === '') return null;

        return (
            <div className={style.imageWrapper}>
                <Image
                    src={src || ''}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </div>
        );
    },

    // NOTE: props に node が含まれるため、node="[object Object]" がタグの属性として出力されるのを防ぐ
    //       ために node を受け取っている
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    code: ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || '');

        return !inline && match ? (
            <Code
                code={String(children).replace(/\n$/, '')}
                language={match[1]}
            />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    a: ({ node, children, ...props }) => {
        const isExternalLink =
            props.href != null ? /^http/.test(props.href) : false;

        return (
            <a
                target={isExternalLink ? '_blank' : undefined}
                rel="noopner noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    h2: ({ node, children, ...props }) => {
        return (
            <h2 id={String(children)} {...props}>
                {children}
            </h2>
        );
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    h3: ({ node, children, ...props }) => {
        return (
            <h3 id={String(children)} {...props}>
                {children}
            </h3>
        );
    },
};

export const Post: FC<PostProps> = ({ post }) => {
    return (
        <div className={style.post}>
            <header className={style.header}>
                <h1>{post.title}</h1>
                <div className={style.date}>{formatDate(post.date)}</div>
                <Tags tags={post.tags} />
            </header>

            <ReactMarkdown
                className={style.content}
                components={components}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm, remarkBreaks]}
                data-testid="content"
                // eslint-disable-next-line react/no-children-prop
                children={post.content}
            />
        </div>
    );
};
