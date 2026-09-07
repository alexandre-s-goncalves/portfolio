import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';
import path from 'node:path';

export default defineConfig({
  base: process.env.VITE_BASE || '/',
  experimental: {
    renderBuiltUrl(filename) {
      return `${filename}?v=${Date.now()}`;
    },
  },
  plugins: [
    svgr({exportAsDefault: true}),
    react(),
    tailwindcss(),
    VitePWA({
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        background_color: '#1a1a1a',
        description: 'Portfolio pessoal moderno de desenvolvimento software',
        display: 'standalone',
        icons: [
          {src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png'},
          {src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png'},
          {
            purpose: 'any maskable',
            sizes: '512x512',
            src: 'pwa-512x512.png',
            type: 'image/png',
          },
        ],
        name: 'Alexandre Gonçalves | Portfolio',
        orientation: 'portrait',
        short_name: 'Alexandre G.',
        start_url: '.',
        theme_color: '#1a1a1a',
      },
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],

  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      constants: path.resolve(__dirname, 'src/constants'),
      context: path.resolve(__dirname, 'src/context'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      i18n: path.resolve(__dirname, 'src/i18n/index.ts'),
      pages: path.resolve(__dirname, 'src/pages'),
      resources: path.resolve(__dirname, 'src/resources'),
      routes: path.resolve(__dirname, 'src/routes'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
    tsconfigPaths: true,
  },
  server: {
    open: true,
    port: 5173,
  },
  test: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      context: path.resolve(__dirname, 'src/context'),
      i18n: path.resolve(__dirname, 'src/i18n/index.ts'),
      pages: path.resolve(__dirname, 'src/pages'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
    environment: 'jsdom',
    globals: true,
  },
});
