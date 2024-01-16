/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, '/public'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        // https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib
        css: true,
    },
});
