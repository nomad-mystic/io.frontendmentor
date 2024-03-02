import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'black-100': '#050505',
                'black-75': '#1F1F1F',
                'black-50': '#2D2D2D',
                'black-25': '#3A3A3A',
                'white-100': '#757575',
                'white-75': '#E9E9E9',
                'white-50': '#F4F4F4',
                'white-25': '#FFFFFF',
                'purple': '#A445ED',
                'red': '#FF5252',
            }
        },
    },
    plugins: [],
};
export default config;
