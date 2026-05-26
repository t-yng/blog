import { FC } from 'react';
import { css } from '@/styled-system/css';
import {
  TITLE_LOGO_IMAGE_URL,
  TITLE_LOGO_IMAGE_ALT,
  TITLE_LOGO_LINK_TITLE,
} from '@/constants';
import { type Locale } from '@/config/i18n';
import { Link } from '../Link/Link';
import { Flex } from '../Flex';
import { LanguageSwitcher } from '../LanguageSwitcher';

type Props = {
  locale?: Locale;
  availableLocales?: Locale[];
};

export const GlobalHeader: FC<Props> = ({
  locale = 'ja',
  availableLocales,
}) => (
  <header>
    <div className={wrapper}>
      <Flex justify="center" py="1rem" px="20px" position="relative">
        <Link href={`/${locale}`} title={TITLE_LOGO_LINK_TITLE}>
          <img
            src={TITLE_LOGO_IMAGE_URL}
            alt={TITLE_LOGO_IMAGE_ALT}
            className={titleLogoImg}
            width={438}
            height={38}
            decoding="async"
          />
        </Link>
        <div className={switcher}>
          <LanguageSwitcher
            locale={locale}
            availableLocales={availableLocales}
          />
        </div>
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

const switcher = css({
  position: 'absolute',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
});
