module.exports = {
  root: true,
  extends: ['airbnb'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
  overrides: [{
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
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true },
    ],
    'no-console': [
      'error',
      { allow: ['warn', 'error'] },
    ],
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
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
      alias: {
        map: [
          ['client', './client'],
        ],
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
};
