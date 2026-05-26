import { FC } from 'react';
import { css } from '@/styled-system/css';
import { type Locale } from '@/config/i18n';
import { siteMetadata } from '@/config/siteMetadata';
import { Link } from '../Link/Link';
import { Flex } from '../Flex';
import { LanguageSwitcher } from '../LanguageSwitcher';

type Props = {
  locale?: Locale;
  availableLocales?: Locale[];
};

const config = {
  ja: {
    imageUrl: '/images/title-logo.svg',
    linkTitle: 'みどりのさるのエンジニアのホームへ',
  },
  en: {
    imageUrl: '/images/title-logo-en.svg',
    linkTitle: 'Go to home of green engineer',
  },
} as const;

export const GlobalHeader: FC<Props> = ({
  locale = 'ja',
  availableLocales,
}) => (
  <header>
    <div className={wrapper}>
      <Flex justify="center" py="1rem" px="20px" position="relative">
        <Link href={`/${locale}`} title={config[locale].linkTitle}>
          <img
            src={config[locale].imageUrl}
            alt={siteMetadata[locale].title}
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
