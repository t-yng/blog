module.exports = {
    purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                'main-layout': 'auto 240px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
