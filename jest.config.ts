import type { Config } from '@jest/types'
import { loadTsConfig, makeJestMapper } from './src/utils/tsconfig-aliases'
import path from 'path'
import fs from 'fs'

const tsconfig = loadTsConfig(path.resolve(__dirname, 'tsconfig.json'))
const compilerOptions = tsconfig.compilerOptions || {}
const baseUrl = compilerOptions.baseUrl || '.'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    ...makeJestMapper(compilerOptions.paths || {}, baseUrl)
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/resources/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
}

export default config
