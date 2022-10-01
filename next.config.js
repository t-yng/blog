// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const config = {
    webpack: (config, { isServer }) => {
        // fix Can't resolve 'fs'
        // @see: https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }

        return config;
    },
    pageExtensions: ['tsx'],
};

module.exports = withBundleAnalyzer(withVanillaExtract(config));
