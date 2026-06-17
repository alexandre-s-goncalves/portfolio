import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import sonarjs from 'eslint-plugin-sonarjs';
import prettier from 'eslint-config-prettier/flat';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  {
    ignores: ['dist/**', 'build/**', '.vite/**', 'node_modules/**', '**/*.log'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      ...tsPlugin.configs['flat/recommended'],
      reactRefresh.configs.vite,
      sonarjs.configs.recommended,
      prettier,
    ],
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      'sonarjs/cognitive-complexity': ['warn', 15],
    },
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {jsx: true},
      },
    },
  },
]);
