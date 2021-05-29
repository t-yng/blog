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
                tag: 'var(--color-black2)',
                'post-date': 'var(--color-black3)',
                'sidebar-header': 'var(--color-white)',
            },
            backgroundColor: {
                tag: 'var(--color-black6)',
                'tag-hover': 'var(--color-black5)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
