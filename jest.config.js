module.exports = {
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
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
            },
        ],
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
