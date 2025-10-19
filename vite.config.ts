import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {makeViteAliases, loadTsConfig} from './src/utils';

const tsconfig = loadTsConfig();
const compilerOptions = tsconfig.compilerOptions || {};
const viteAliases = makeViteAliases(compilerOptions.paths || {}, compilerOptions.baseUrl || '.');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: viteAliases,
  },
  server: {
    port: 5173,
  },
});
