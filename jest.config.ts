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
    '\\.(svg)$': '<rootDir>/src/__mocks__/svgrMock.tsx',
    ...makeJestMapper(compilerOptions.paths || {}, baseUrl),
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/assets/',
    '/src/resources/',
    '/src/types/',
    '/src/index\\.tsx?$',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

export default config;
