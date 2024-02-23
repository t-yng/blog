import { FC } from 'react';
import { css, cx } from '@/styled-system/css';
import { Post as PostEntity } from '@/types/Post';
import { Tags } from '@/components/common';
import { formatDate } from '@/lib/format';
import { Heading } from '@/components/common/Heading';

type PostProps = {
  post: PostEntity;
};

export const Post: FC<PostProps> = ({ post }) => {
  return (
    <article className={cx(postCss)}>
      <header className={header}>
        <Heading level={1}>{post.title}</Heading>
        <div className={date}>{formatDate(post.date)}</div>
        <Tags tags={post.tags} />
      </header>

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        className={content}
        data-test="content"
      />
    </article>
  );
};

const postCss = css({
  backgroundColor: 'white',
  border: `1px solid token(colors.black6)`,
  padding: '16px 32px',

  '@media (max-width: 850px)': {
    padding: '16px 20px',
  },
});

const header = css({
  marginBottom: '2rem',
});

const date = css({
  color: 'black3',
  marginBottom: '0.5rem',
});

// NOTE: PandaCSSがカスケードレイヤーでスタイルを定義するためのレイヤーを定義しないprismjsのCSSを上書きできない
//       回避策として全てのCSSの値に!importantをつけて対応している
const content = css({
  '& h2, h3, h4': {
    marginTop: '2.5rem !important',
  },
  '& h2': {
    borderBottom: `0.5px solid token(colors.black4) !important`,
    paddingBottom: '0.5rem !important',
  },
  '& img': {
    maxWidth: '100% !important',
    height: 'auto !important',
    marginTop: '1rem !important',
  },
  '& p': {
    marginBottom: '0 !important',
    marginTop: '1rem !important',
  },
  '& blockquote': {
    borderLeft: `5px solid token(colors.black4) !important`,
    color: 'black2 !important',
    padding: '1rem !important',
    paddingRight: '0 !important',
    margin: '1.5rem 0 !important',
  },
  '& blockquote p': {
    marginTop: '0 !important',
    marginBottom: '0 !important',
  },
  '& pre': {
    fontSize: '0.875rem !important',
    background: 'hsl(233deg 16% 22%) !important',
    marginTop: '1rem !important',
  },
  '& pre:has(code)': {
    padding: '1rem !important',
    overflow: 'auto !important',
  },
  '& code': {
    fontSize: '0.875rem !important',
    fontFamily:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace !important",
  },
  '& :not(pre) code': {
    background: 'black6 !important',
    fontFamily:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace !important",
    padding: '0.1em 0.4em !important',
  },
  '& table': {
    borderCollapse: 'collapse !important',
    display: 'block !important',
    width: '100% !important',
    overflow: 'auto !important',
    margin: '1rem 0 !important',
  },
  '& table th, table td': {
    padding: '6px 13px !important',
    border: `1px solid token(colors.black5) !important`,
  },
  '& thead th': {
    background: 'black6 !important',
  },
  '& table tr': {
    backgroundColor: 'white !important',
    borderTop: `1px solid token(colors.black5) !important`,
  },
  '& ul, ol': {
    paddingLeft: '1.8em !important',
  },
});
