import type {Config} from '@jest/types';
import {loadTsConfig, makeJestMapper} from './src/utils';
import path from 'path';
import fs from 'fs';

const tsconfig = loadTsConfig(path.resolve(__dirname, 'tsconfig.json'));
const compilerOptions = tsconfig.compilerOptions || {};
const baseUrl = compilerOptions.baseUrl || '.';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    ...makeJestMapper(compilerOptions.paths || {}, baseUrl),
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/resources/**',
    '!src/**/__tests__/**',
    '!src/pages/**/index.ts',
    '!src/documents/**/index.ts',
    '!src/components/text/index.ts',
    '!src/utils/index.ts',
    '!src/context/index.ts',
    '!src/utils/i18n/**',
    '!src/**/__snapshots__/**',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/resources/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

export default config;
