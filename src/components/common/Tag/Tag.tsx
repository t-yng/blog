import { FC } from 'react';
import { css } from '@linaria/core';
import { Link } from '@/components/common';
import { createTagLink } from '@/lib/link';
import { colors } from '@/styles/token';
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
    <Flex alignItems="center" py="4px" px="8px" className={tag}>
      <Text fontSize="xs" lineHeight="1.5" color={colors.black2}>
        {name}
      </Text>
    </Flex>
  </Link>
);

const tag = css`
  background-color: ${colors.white};
  border: 1px solid ${colors.black4};
  border-radius: 4px;

  &:hover {
    border-color: ${colors.black2};
  }
`;
