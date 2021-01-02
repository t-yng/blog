import React, { FC } from 'react';
import { Prism as SyntaxHilighter } from 'react-syntax-highlighter';
import { css } from '@emotion/react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
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

const rederers: ReactMarkdownProps['renderers'] = {
    image: ({ src, alt }) => (
        <picture css={style.picture}>
            <img alt={alt} src={src} css={style.image} />
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
    <div css={style.post}>
        <header css={style.header}>
            <h1>{post.title}</h1>
            <div css={style.date}>{formatDate(post.date)}</div>
            <Tags tags={post.tags} />
        </header>
        <ReactMarkdown
            css={style.content}
            renderers={rederers}
            children={post.content}
            data-testid="content"
        />
    </div>
);
