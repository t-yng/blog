import { FC } from 'react';
import { Flex } from '../Flex';
import { Tag } from './Tag';
import type { Locale } from '@/config/i18n';

interface TagsProps {
  tags: string[];
  className?: string;
  locale?: Locale;
}

const sortTags = (tags: string[]): string[] => {
  return tags.sort((a, b) => {
    const aName = a.toUpperCase();
    const bName = b.toUpperCase();

    if (aName < bName) {
      return -1;
    } else if (aName > bName) {
      return 1;
    }

    return 0;
  });
};

export const Tags: FC<TagsProps> = ({ tags, className, locale }) => (
  <Flex className={className} gap="0.5rem">
    {sortTags(tags).map((tag) => {
      return <Tag name={tag} key={tag} locale={locale} />;
    })}
  </Flex>
);
