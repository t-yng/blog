module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
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
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
        },
    },
};
