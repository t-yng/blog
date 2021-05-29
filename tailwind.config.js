module.exports = {
    purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                'main-layout': 'auto 240px',
            },
            textColor: {
                accent: 'var(--color-accent)',
                sidebar: 'var(--color-black2)',
                'sidebar-header': 'var(--color-white)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
