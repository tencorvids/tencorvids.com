/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'base-white': 'var(--base-white)',
                'base-black': 'var(--base-black)',
                gray: {
                    10: 'var(--gray-10)',
                    20: 'var(--gray-20)',
                    30: 'var(--gray-30)',
                    40: 'var(--gray-40)',
                    50: 'var(--gray-50)',
                    60: 'var(--gray-60)',
                    70: 'var(--gray-70)',
                    80: 'var(--gray-80)',
                    90: 'var(--gray-90)',
                    100: 'var(--gray-100)',
                },
            },
            backgroundColor: {
                background: 'var(--background-background)',
                'layer-01': 'var(--layer-layer-01)',
                'background-hover': 'var(--background-background-hover)',
            },
            textColor: {
                primary: 'var(--text-text-primary)',
                secondary: 'var(--text-text-secondary)',
            },
        },
    },
    plugins: [],
}
