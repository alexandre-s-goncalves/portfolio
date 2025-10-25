import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import {makeViteAliases, loadTsConfig} from './src/utils';

const tsconfig = loadTsConfig();
const compilerOptions = tsconfig.compilerOptions || {};
const viteAliases = makeViteAliases(compilerOptions.paths || {}, compilerOptions.baseUrl || '.');

export default defineConfig({
  plugins: [svgr({exportAsDefault: true}), react()],
  resolve: {
    alias: viteAliases,
  },
  server: {
    port: 5173,
  },
});
