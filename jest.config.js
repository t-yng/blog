module.exports = {
    preset: 'ts-jest',
    testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json'
        }
    }
};
