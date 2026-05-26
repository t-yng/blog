'use client';

import { FC } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { css } from '@/styled-system/css';
import { locales, type Locale } from '@/config/i18n';
import { setPreferredLocale } from '@/lib/cookie';

const localeOptions: Record<Locale, { flag: string; label: string }> = {
  ja: { flag: '🇯🇵', label: '日本語' },
  en: { flag: '🇺🇸', label: 'English' },
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

  return (
    <div className={wrapper}>
      <select
        className={select}
        value={locale}
        onChange={(e) => {
          const targetLocale = e.target.value as Locale;
          setPreferredLocale(targetLocale);
          router.push(getHref(targetLocale));
        }}
      >
        {availableLocales.map((l) => {
          const { flag, label } = localeOptions[l];
          return (
            <option key={l} value={l}>
              {flag} {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const wrapper = css({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
});

const select = css({
  appearance: 'none',
  background: 'rgba(255,255,255,0.15)',
  border: '1px solid rgba(255,255,255,0.4)',
  borderRadius: '6px',
  color: 'white',
  cursor: 'pointer',
  fontSize: 'sm',
  fontFamily: 'inherit',
  paddingBlock: '4px',
  paddingInline: '8px 28px',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 8px center',
  '&:hover': {
    background: 'rgba(255,255,255,0.25)',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
  },
  '&:focus': {
    outline: '2px solid rgba(255,255,255,0.6)',
    outlineOffset: '2px',
  },
  '& option': {
    background: '#333',
    color: 'white',
  },
});
