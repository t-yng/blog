const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const config = {
    webpack: (config, { isServer }) => {
        // fix Can't resolve 'fs'
        // @see: https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
        if (!isServer) {
            config.node = {
                fs: 'empty',
            };
        }

        return config;
    },
};

module.exports = withBundleAnalyzer(config);
