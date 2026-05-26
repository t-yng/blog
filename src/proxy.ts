import { NextRequest, NextResponse } from 'next/server';
import {
  getPreferredLocaleFromRequest,
  setPreferredLocaleForResponse,
} from '@/lib/cookie';
import type { Locale } from '@/config/i18n';

function detectLocale(acceptLanguage: string): Locale {
  const langs = acceptLanguage
    .split(',')
    .map((entry) => {
      const [code, q] = entry.trim().split(';q=');
      return { code: code.trim().toLowerCase(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of langs) {
    if (code.startsWith('en')) return 'en';
    if (code.startsWith('ja')) return 'ja';
  }

  return 'ja';
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== '/') return NextResponse.next();

  const storedLocale = getPreferredLocaleFromRequest(request);
  const locale =
    storedLocale ?? detectLocale(request.headers.get('accept-language') ?? '');

  const response = NextResponse.redirect(new URL(`/${locale}`, request.url));
  if (!storedLocale) {
    setPreferredLocaleForResponse(response, locale);
  }
  return response;
}

export const config = {
  matcher: ['/'],
};
