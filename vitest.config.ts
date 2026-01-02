/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import path from 'path';

export default getViteConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setup.ts',
        include: ['**/*.test.{ts,tsx}'],
    },
});
