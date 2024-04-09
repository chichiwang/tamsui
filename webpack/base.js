const paths = require('./paths');
const env = require('./env');
const typescriptRule = require('./rules/typescript');

const baseConfig = {
  mode: env.get(),
  devtool: env.isProd ? 'source-map' : 'eval-source-map',
  module: {
    rules: [typescriptRule],
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjs', '.tsx', '.jsx', '...'],
    alias: {
      app: paths.project.app,
      pages: paths.project.pages,
    },
  },
};

module.exports = baseConfig;
