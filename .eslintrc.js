module.exports = {
  root: true,
  extends: ['airbnb'],
  plugins: [
    'jest',
    'filenames',
  ],
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
  overrides: [{
    files: ['*.js', 'webpack-config/**/*.js'],
    rules: {
      'filenames/match-regex': 0,
      'filenames/match-exported': 0,
    },
  }, {
    files: ['server/**/*.*'],
    rules: {
      'no-console': 'off',
    },
  }, {
    files: ['*.ts', '*.tsx'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
  }],
  ignorePatterns: ['dist/**/*.*'],
  rules: {
    'filenames/match-regex': [2, '^[a-zA-Z_.]+$'],
    'filenames/match-exported': 2,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    'no-console': [
      'error',
      { allow: ['warn', 'error'] },
    ],
    'no-restricted-syntax': 'off',
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'wrap-iife': [
      'error',
      'inside',
      { functionPrototypeMethods: true },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
      alias: {
        map: [
          ['app', './app'],
          ['pages', './pages'],
        ],
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
};
