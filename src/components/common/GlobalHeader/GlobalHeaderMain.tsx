import { FC } from 'react';
import { css } from '@linaria/core';
import {
  TITLE_LOGO_IMAGE_URL,
  TITLE_LOGO_IMAGE_ALT,
  TITLE_LOGO_LINK_TITLE,
} from '@/constants';
import { colors } from '@/styles/token';
import { Link } from '../Link/Link';
import { Flex } from '../Flex';

export const GlobalHeaderMain: FC = () => (
  <div className={wrapper}>
    <Flex justifyContent="center" py="1rem" px="20">
      <Link href="/" title={TITLE_LOGO_LINK_TITLE}>
        <img
          src={TITLE_LOGO_IMAGE_URL}
          alt={TITLE_LOGO_IMAGE_ALT}
          className={titleLogoImg}
          width={438}
          height={38}
          decoding="async"
        />
      </Link>
    </Flex>
  </div>
);

const wrapper = css`
  background-color: ${colors.main};
`;

const titleLogoImg = css`
  width: 100%;
`;
