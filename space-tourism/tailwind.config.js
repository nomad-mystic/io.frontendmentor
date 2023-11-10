/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
        maxWidth: {
            'container': '1440px',
        },
        colors: {
            "black": "var(--color-black)",
            "blue": "var(--color-blue)",
            "white": "var(--color-white)",
            "whiteLight": "var(--color-white-light)",
        }
    },
  },
  plugins: [],
}

