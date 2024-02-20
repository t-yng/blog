import { FC } from 'react';
import { css } from '@/styled-system/css';
import { Link } from '@/components/common';
import { createTagLink } from '@/lib/link';

import { SidebarSection } from './SidebarSection';

interface Tag {
  name: string;
  count: number;
}

export interface SidebarTagsProps {
  tags: Tag[];
}

const sortTags = (tags: Tag[]): Tag[] => {
  return tags.sort((a, b) => b.count - a.count);
};

export const SidebarTags: FC<SidebarTagsProps> = ({ tags, ...others }) => (
  <SidebarSection title="タグ" {...others}>
    <ul className={tagsCss}>
      {sortTags(tags).map((tag) => (
        <li key={tag.name} className={tagCss}>
          <Link
            decoration={false}
            href={createTagLink(tag.name)}
            aria-label={`${tag.name}の記事一覧、${tag.count}件`}
          >
            {`${tag.name} (${tag.count})`}
          </Link>
        </li>
      ))}
    </ul>
  </SidebarSection>
);

const tagsCss = css({
  listStyle: 'none',
  marginTop: 0,
  marginBottom: 0,
  paddingLeft: 0,
});

const tagCss = css({
  color: 'black2',
  marginBottom: '0.5rem',
  fontSize: 'sm',
  lineHeight: '1.15rem',
  '&:hover': {
    color: 'accent',
  },
});
