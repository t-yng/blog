module.exports = {
    presets: ['next/babel', '@emotion/babel-preset-css-prop'],
    plugins: [
        [
            'prismjs',
            {
                languages: [
                    'typescript',
                    'javascript',
                    'js',
                    'css',
                    'rust',
                    'html',
                    'json',
                    'shell',
                    'bash',
                    'shell-session',
                    'yaml',
                    'tsx',
                ],
                plugins: [],
                theme: 'tomorrow',
                css: true,
            },
        ],
    ],
};
