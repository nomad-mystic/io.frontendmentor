/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
        maxWidth: {
            'container': '1385px',
        }
    },
  },
  plugins: [],
}

