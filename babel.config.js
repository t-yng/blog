module.exports = {
    presets: ['next/babel'],
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
