/** @type {import('@swc/core').Config} */
const swcConfig = {
    sourceMaps: true,
    module: {
        type: 'commonjs',
    },
    jsc: {
        parser: {
            syntax: 'typescript',
            tsx: true,
        },
        transform: {
            react: {
                runtime: 'automatic',
            },
        },
    },
};

/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig = {
    transform: {
        '\\.css\\.ts$': '@vanilla-extract/jest-transform',
        '^.+\\.(t|j)sx?$': ['@swc/jest', swcConfig],
    },
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['/node_modules/(?!react-markdown)/'],
    testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
    setupFilesAfterEnv: ['./test/setup.ts'],
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
    coveragePathIgnorePatterns: [
        '<rootDir>/src/usecases/UsecaseContainer.ts',
        '<rootDir>/src/styles/',
        '<rootDir>/src/constants/',
        'index.ts',
    ],
};

module.exports = jestConfig;
