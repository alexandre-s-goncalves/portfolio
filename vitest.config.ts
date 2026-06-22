import {defineConfig, mergeConfig} from 'vitest/config';
import viteConfig from './vite.config.js';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setup.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html', 'lcov'],
        exclude: [
          'node_modules/',
          'src/test/',
          '**/index.ts',
          'src/main.tsx',
          'src/vite-env.d.ts',
          '**/*.test.{ts,tsx}',
          'src/assets/**',
        ],
      },
    },
  }),
);
