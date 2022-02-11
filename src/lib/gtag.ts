export const GA_TRACKING_ID = 'UA-57390966-4';
export const GA4_TRACKING_ID = 'G-02GKP2XYRY';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};
