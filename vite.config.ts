import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import typescript from 'vite-plugin-typescript';

export default defineConfig({
    plugins: [react(),typescript()],
    base: './',
    build: {
        outDir: 'dist',

    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
    },
})