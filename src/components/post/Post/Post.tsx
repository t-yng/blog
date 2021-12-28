import { FC } from 'react';
import { css } from '@emotion/react';
import ReactMarkdown, { Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import { Post as PostEntity } from '../../../entities/Post';
import { colors } from '../../../styles/color';
import { Tags } from '../../common/Tags/Tags';
import { formatDate } from '../../../lib/format';
import { Code } from '../Code';

const style = {
    post: css`
        background-color: ${colors.white};
        border: 1px solid ${colors.black6};
        padding: 1rem;
    `,
    header: css`
        margin-bottom: 2rem;
    `,
    date: css`
        color: ${colors.black3};
        margin-bottom: 0.5rem;
    `,
    content: css`
        h2,
        h3,
        h4 {
            margin-top: 2.5rem;
        }
        h2 {
            border-bottom: 0.5px solid ${colors.black4};
            padding-bottom: 0.5rem;
        }
        blockquote {
            border-left: 5px solid ${colors.black5};
            color: ${colors.black2};
            padding: 1rem;
            padding-right: 0;
            margin: 1.5rem 0;
        }

        blockquote p {
            margin-top: 0;
            margin-bottom: 0;
        }

        & :not(pre) code {
            background: ${colors.black6};
            font-family: '"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace';
            padding: 0.1em 0.4em;
        }
        table {
            border-collapse: collapse;
            display: block;
            width: 100%;
            overflow: auto;
            margin: 1rem 0;
        }
        table th,
        table td {
            padding: 6px 13px;
            border: 1px solid ${colors.black5};
        }
        thead th {
            background: ${colors.black6};
        }
        table tr {
            background-color: white;
            border-top: 1px solid ${colors.black5};
        }
    `,
    imageWrapper: css`
        display: flex;
        justify-content: center;
        margin-top: 1em;
        margin-bottom: 1em;
    `,
};

type PostProps = {
    post: PostEntity;
};

const components: Options['components'] = {
    img: ({ src, width, height, alt }) => {
        if (src == null || src === '') return null;

        return (
            <div css={style.imageWrapper}>
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
        <div css={style.post}>
            <header css={style.header}>
                <h1>{post.title}</h1>
                <div css={style.date}>{formatDate(post.date)}</div>
                <Tags tags={post.tags} />
            </header>

            <ReactMarkdown
                css={style.content}
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
