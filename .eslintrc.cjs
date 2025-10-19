module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jest', 'react-hooks'],
  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
  overrides: [
    {
      files: ['**/*.{ts,tsx,js,jsx}'],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto'
          }
        ],
        'jest/no-identical-title': 'error',
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        'no-trailing-spaces': 'error',
        'eol-last': ['error', 'always']
      }
    }
  ]
}
