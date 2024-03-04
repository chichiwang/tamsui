module.exports = {
  root: true,
  extends: ['airbnb'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
  rules: {
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
  },
};
