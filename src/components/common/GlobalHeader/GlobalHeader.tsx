import { FC } from 'react';
import { css } from '@/styled-system/css';
import {
  TITLE_LOGO_IMAGE_URL,
  TITLE_LOGO_IMAGE_ALT,
  TITLE_LOGO_LINK_TITLE,
} from '@/constants';
import { Link } from '../Link/Link';
import { Flex } from '../Flex';

export const GlobalHeader: FC = () => (
  <header>
    <div className={wrapper}>
      <Flex justify="center" py="1rem" px="20px">
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
  </header>
);

const wrapper = css({
  backgroundColor: 'main',
});

const titleLogoImg = css({
  width: '100%',
});
