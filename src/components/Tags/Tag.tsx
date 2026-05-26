import { FC } from 'react';
import { createTagLink } from '@/lib/link';
import { css } from '@/styled-system/css';
import { Link } from '../Link';
import { Flex } from '../Flex';
import { Text } from '../Text/Text';
import type { Locale } from '@/config/i18n';

interface TagProps {
  name: string;
  locale?: Locale;
}

export const Tag: FC<TagProps> = ({ name, locale }) => (
  <Link
    href={createTagLink(name, locale)}
    decoration={false}
    aria-label={`タグ、${name}`}
  >
    <Flex align="center" py="4px" px="8px" className={tag}>
      <Text fontSize="xs" lineHeight="1.5" color="black2">
        {name}
      </Text>
    </Flex>
  </Link>
);

const tag = css({
  backgroundColor: 'white',
  border: `1px solid token(colors.black4)`,
  borderRadius: 4,

  '&:hover': {
    borderColor: 'black2',
  },
});
