import { FC } from 'react';
import { Link } from '@/components/common';
import { createTagLink } from '@/lib/link';

import { css } from '@/styled-system/css';
import { Flex } from '../Flex';
import { Text } from '../Text/Text';

interface TagProps {
  name: string;
}

export const Tag: FC<TagProps> = ({ name }) => (
  <Link
    href={createTagLink(name)}
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
