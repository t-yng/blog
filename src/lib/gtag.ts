export const GA_TRACKING_ID = 'UA-57390966-4';
export const GA4_TRACKING_ID = 'G-02GKP2XYRY';

export const gtagJsUrl = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;

export const trackingCode = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-57390966-4');

    gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
    });
    gtag('config', '${GA4_TRACKING_ID}', {
        page_path: window.location.pathname,
    });
`;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};
