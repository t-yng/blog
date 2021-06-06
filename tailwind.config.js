module.exports = {
    purge: ['./src/**/*.{ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            borderRadius: {
                circle: '50%',
            },
            gridTemplateColumns: {
                'main-layout': 'auto 240px',
            },
            textColor: {
                accent: 'var(--color-accent)',
                sidebar: 'var(--color-black2)',
                tag: 'var(--color-black2)',
                pagination: 'var(--color-black1)',
                'post-date': 'var(--color-black3)',
                'sidebar-header': 'var(--color-white)',
            },
            backgroundColor: {
                accent: 'var(--color-accent)',
                horizon: 'var(--color-black4)',
                tag: 'var(--color-black6)',
                sidebar: 'var(--color-white)',
                'tag-hover': 'var(--color-black5)',
                'global-header': 'var(--color-primary)',
                'sidebar-header': 'var(--color-primary)',
            },
            maxWidth: {
                '80p': '80%',
                'main-layout': '1152px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
