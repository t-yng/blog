/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import '@vanilla-extract/css/disableRuntimeStyles';

export default defineConfig({
    test: {
        globals: true,
        // testEnvironment
        environment: 'jsdom',
        // setupFilesAfterEnv
        setupFiles: [`test/setup.ts`],
        // testMatch
        include: [`src/**/*.{test,spec}.{ts,tsx}`],
        // moduleNameMapper
        alias: {
            '@/': `${__dirname}/src/`,
            '@test/': `${__dirname}/test/`,
            '\\.css$': 'identity-obj-proxy',
        },
        coverage: {
            // collectCoverageFrom
            include: [`src/**/*.{ts,tsx}`],
            // coveragePathIgnorePatterns
            exclude: [
                `src/usecases/UsecaseContainer.ts`,
                `src/styles/`,
                `src/constants/`,
                `src/**/index.ts`,
            ],
        },
    },
    // transform
    plugins: [vanillaExtractPlugin(), react()],
});
