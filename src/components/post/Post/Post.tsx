import { FC } from 'react';
import { css } from '@linaria/core';
import { Post as PostEntity } from '@/types/Post';
import { Tags } from '@/components/common';
import { formatDate } from '@/lib/format';
import { colors } from '@/styles/token';

import 'prismjs/themes/prism-tomorrow.css';
import { Heading } from '@/components/common/Heading';

type PostProps = {
  post: PostEntity;
};

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <article className={`${postCss} ${contentGlobal}`}>
      <header className={header}>
        <Heading level={1}>{post.title}</Heading>
        <div className={date}>{formatDate(post.date)}</div>
        <Tags tags={post.tags} />
      </header>

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className="content"
        data-test="content"
      />
    </article>
  );
};

const postCss = css`
  background-color: ${colors.white};
  border: 1px solid ${colors.black6};
  padding: 16px 32px;

  @media (max-width: 850px) {
    padding: 16px 20px;
  }
`;

const header = css`
  margin-bottom: 2rem;
`;

const date = css`
  color: ${colors.black3};
  margin-bottom: 0.5rem;
`;

const contentGlobal = css`
  :global() {
    .content h2,
    h3,
    h4 {
      margin-top: 2.5rem;
    }

    .content h2 {
      border-bottom: 0.5px solid ${colors.black4};
      padding-bottom: 0.5rem;
    }

    .content img {
      max-width: 100%;
      height: auto;
      margin-top: 1rem;
    }

    .content p {
      margin-bottom: 0;
      margin-top: 1rem;
    }

    .content blockquote {
      border-left: 5px solid ${colors.black4};
      color: ${colors.black2};
      padding: 1rem;
      padding-right: 0;
      margin: 1.5rem 0;
    }

    .content blockquote p {
      margin-top: 0;
      margin-bottom: 0;
    }

    .content pre {
      font-size: 0.875rem;
      background: hsl(233deg 16% 22%) !important;
      margin-top: 1rem;
    }

    .content code {
      font-size: 0.875rem;
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
        monospace !important;
    }

    .content :not(pre) code {
      background: ${colors.black6};
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
        monospace;
      padding: 0.1em 0.4em;
    }

    .content table {
      border-collapse: collapse;
      display: block;
      width: 100%;
      overflow: auto;
      margin: 1rem 0;
    }

    .content table th,
    table td {
      padding: 6px 13px;
      border: 1px solid ${colors.black5};
    }

    .content thead th {
      background: ${colors.black6};
    }

    .content table tr {
      background-color: white;
      border-top: 1px solid ${colors.black5};
    }

    .content ul,
    .content ol {
      padding-left: 1.8em;
    }
  }
`;
