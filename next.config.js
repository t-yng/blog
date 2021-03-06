// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const config = {
    future: {
        webpack5: true,
    },
    webpack: (config, { isServer }) => {
        // fix Can't resolve 'fs'
        // @see: https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }

        return config;
    },
};

module.exports = withBundleAnalyzer(config);
