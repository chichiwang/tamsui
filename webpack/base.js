const env = require('./env');

const resolve = require('./resolve');
const typescriptRule = require('./rules/typescript');

const baseConfig = {
  mode: env.get(),
  devtool: env.isProd ? 'source-map' : 'eval-source-map',
  module: {
    rules: [typescriptRule],
  },
  resolve,
};

module.exports = baseConfig;
