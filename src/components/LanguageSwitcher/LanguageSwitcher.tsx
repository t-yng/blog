'use client';

import { FC, Fragment } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { css } from '@/styled-system/css';
import { locales, type Locale } from '@/config/i18n';
import { setPreferredLocale } from '@/lib/cookie';
import { Flex } from '../Flex';

const localeLabels: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
};

type Props = {
  locale?: Locale;
  // Locales that have a translated version. Omit to allow all locales.
  availableLocales?: Locale[];
};

export const LanguageSwitcher: FC<Props> = ({
  locale = 'ja',
  availableLocales = locales,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const getHref = (targetLocale: Locale) =>
    pathname.replace(`/${locale}`, `/${targetLocale}`);

  const handleSwitch = (targetLocale: Locale) => {
    setPreferredLocale(targetLocale);
    router.push(getHref(targetLocale));
  };

  return (
    <Flex gap="4px" align="center" className={wrapper}>
      {locales.map((l, i) => (
        <Fragment key={l}>
          {i > 0 && <span className={divider}>|</span>}
          {l === locale ? (
            <span className={`${langBtn} ${active}`}>{localeLabels[l]}</span>
          ) : availableLocales.includes(l) ? (
            <button
              className={`${langBtn} ${linkStyle}`}
              onClick={() => handleSwitch(l)}
            >
              {localeLabels[l]}
            </button>
          ) : (
            <span className={`${langBtn} ${inactive}`}>{localeLabels[l]}</span>
          )}
        </Fragment>
      ))}
    </Flex>
  );
};

const wrapper = css({
  fontSize: 'sm',
  color: 'white',
});

const langBtn = css({
  color: 'white',
  background: 'none',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
});

const linkStyle = css({
  '&:hover': { opacity: 0.8 },
});

const active = css({
  fontWeight: 'bold',
});

const inactive = css({
  opacity: 0.5,
  cursor: 'default',
});

const divider = css({
  color: 'white',
  opacity: 0.5,
});
