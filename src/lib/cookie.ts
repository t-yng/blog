import Cookies from 'js-cookie';
import { NextRequest, NextResponse } from 'next/server';
import type { Locale } from '@/config/i18n';

export const PREFERRED_LOCALE_COOKIE = 'preferred-locale';
const COOKIE_MAX_AGE_DAYS = 365;

function createPreferredLocaleCookie(locale: Locale) {
  return {
    name: PREFERRED_LOCALE_COOKIE,
    value: locale,
    options: {
      path: '/',
      expires: COOKIE_MAX_AGE_DAYS,
      sameSite: 'lax' as const,
    },
  };
}

export function setPreferredLocale(locale: Locale): void {
  const cookie = createPreferredLocaleCookie(locale);
  Cookies.set(cookie.name, cookie.value, cookie.options);
}

export function setPreferredLocaleForResponse(
  response: NextResponse,
  locale: Locale
): void {
  const cookie = createPreferredLocaleCookie(locale);
  response.cookies.set(cookie.name, cookie.value, cookie.options);
}

export function getPreferredLocaleFromRequest(request: NextRequest): Locale {
  return request.cookies.get(PREFERRED_LOCALE_COOKIE)?.value as Locale;
}

export function getPreferredLocale(): Locale {
  return Cookies.get(PREFERRED_LOCALE_COOKIE) as Locale;
}
