import { FC } from 'react';
import { css } from '@linaria/core';
import { Link } from '@/components/common';
import { createTagLink } from '@/lib/link';
import { colors } from '@/styles/color';
import { Flex } from '../Flex';

interface TagProps {
  name: string;
}

export const Tag: FC<TagProps> = ({ name }) => (
  <Link
    href={createTagLink(name)}
    decoration={false}
    aria-label={`タグ、${name}`}
  >
    <Flex
      direction="column"
      justifyContent="center"
      py="4px"
      px="8px"
      className={tag}
    >
      {name}
    </Flex>
  </Link>
);

const tag = css`
  background-color: ${colors.white};
  border: 1px solid ${colors.black4};
  border-radius: 4px;
  color: ${colors.black2};
  font-size: 0.75rem;
  line-height: 1.5;

  &:hover {
    border-color: ${colors.black2};
  }
`;
