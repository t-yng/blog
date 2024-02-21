'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '@/lib/gtag';

export const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    // 本番環境でのみトラッキングを実行する
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    router.events.on('routeChangeComplete', gtag.pageview);

    return () => {
      router.events.off('routeChangeComplete', gtag.pageview);
    };
  }, [router.events]);
};
