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
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
