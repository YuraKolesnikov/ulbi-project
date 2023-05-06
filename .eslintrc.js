const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [path.resolve(__dirname, 'tsconfig.json')],
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/no-floating-promises': 0,
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
}
