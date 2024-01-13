/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
        `src/types/`,
        `src/pages/`,
      ],
    },
  },
  // transform
  plugins: [react()],
});
