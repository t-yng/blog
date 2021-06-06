import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import React, { FC } from 'react';
import { PrismAsync as SyntaxHilighter } from 'react-syntax-highlighter';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import { Post as PostEntity } from '../../../entities/Post';
import { Tags } from '../../common/Tags/Tags';
import { formatDate } from '../../../lib/format';
import { vscDarkPlus } from '../../../styles/syntaxHighlight/prism';
import styles from './Post.module.css';

type PostProps = {
    post: PostEntity;
};

const rederers: ReactMarkdownProps['renderers'] = {
    image: ({ src, alt }) => (
        <picture className="inline-block text-center w-full">
            <img alt={alt} data-src={src} className="lazyload max-w-80p" />
        </picture>
    ),
    code: ({ language, value }) => (
        <SyntaxHilighter
            language={language}
            style={vscDarkPlus.style}
            customStyle={vscDarkPlus.customStyle}
            codeTagProps={{ style: vscDarkPlus.codeTagStyle }}
        >
            {value}
        </SyntaxHilighter>
    ),
    link: ({ children, href }) => (
        <a href={href} target="_blank" rel="noopner noreferrer">
            {children}
        </a>
    ),
};

export const Post: FC<PostProps> = ({ post }) => (
    <div className="bg-white border-solid border border-gray-100 p-4">
        <header className="mb-8">
            <h1>{post.title}</h1>
            <div className="text-gray-500 mb-2">{formatDate(post.date)}</div>
            <Tags tags={post.tags} />
        </header>
        <ReactMarkdown
            className={styles.content}
            renderers={rederers}
            data-testid="content"
        >
            {post.content}
        </ReactMarkdown>
    </div>
);
