import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import React, { FC } from 'react';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { css } from '@emotion/react';
import ReactMarkdown, { Options } from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Post as PostEntity } from '../../../entities/Post';
import { colors } from '../../../styles/color';
import { Tags } from '../../common/Tags/Tags';
import { formatDate } from '../../../lib/format';
import { vscDarkPlus } from '../../../styles/syntaxHighlight/prism';
import { commonSyntaxHighlightStyle } from '../../../styles/syntaxHighlight/common';

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
        & :not(pre) code {
            background: ${colors.black6};
            font-family: ${commonSyntaxHighlightStyle.fontFamily};
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
    image: css`
        max-width: 80%;
    `,
    picture: css`
        display: inline-block;
        text-align: center;
        width: 100%;
    `,
};

type PostProps = {
    post: PostEntity;
};

const components: Options['components'] = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    img: ({ node, src, ...props }) => (
        <picture css={style.picture}>
            <img
                data-src={src}
                className="lazyload"
                css={style.image}
                {...props}
            />
        </picture>
    ),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    code: ({ node, inline, className, children, ref, ...props }) => {
        const match = /language-(\w+)/.exec(className || '');

        return !inline && match ? (
            <SyntaxHighlighter
                style={vscDarkPlus.style}
                customStyle={vscDarkPlus.customStyle}
                codeTagProps={{ style: vscDarkPlus.codeTagStyle }}
                language={match[1]}
                {...props}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    a: ({ node, children, ...props }) => (
        <a target="_blank" rel="noopner noreferrer" {...props}>
            {children}
        </a>
    ),
};

export const Post: FC<PostProps> = ({ post }) => (
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
            plugins={[gfm]}
            data-testid="content"
        >
            {post.content}
        </ReactMarkdown>
    </div>
);
