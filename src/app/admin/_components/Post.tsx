'use client';

import { Heading, Tag } from '@chakra-ui/react';
import { PencilIcon, TrashIcon } from '@primer/octicons-react';
import { css } from 'linaria';
import { Post as PostModel } from '@/entities';
import { Link } from '@/components/common/Link';
import type { FC } from 'react';

type PostProps = {
  post: PostModel;
};

export const Post: FC<PostProps> = ({ post }) => {
  // const editPath = DraftPost.isDraftPost(post)
  //   ? `/drafts/${post.pullRequestId}/edit`
  //   : `/posts/${post.id}/edit`;
  const editPath = `/posts/${post.id}/edit`;

  return (
    <article className={postCss}>
      <div className={postHeader}>
        <Heading as="h2" size="sm">
          {post.title}
        </Heading>
        <div className={actionButtons}>
          <Link href={editPath} className={actionButton}>
            <PencilIcon />
          </Link>
          <button className={`${actionButton} ${deleteActionButton}`}>
            <TrashIcon />
          </button>
        </div>
      </div>
      <div className={tags}>
        {post.tags.map((tag) => (
          <Tag key={tag} variant="outline">
            {tag}
          </Tag>
        ))}
      </div>
    </article>
  );
};

export const postCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 16px;
  border-bottom: 1px solid var(--chakra-colors-gray-300);
`;

export const postHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const actionButtons = css`
  display: flex;
  gap: 16px;
`;

export const actionButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  background-color: var(--chakra-colors-gray-100);
  color: var(--chakra-colors-gray-500);
`;

export const deleteActionButton = css`
  background-color: var(--chakra-colors-red-600);
  color: var(--chakra-colors-white);
`;

export const tags = css`
  display: flex;
  gap: 8px;
`;
