/* eslint import/no-extraneous-dependencies: 0 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths');
const baseConfig = require('./base');
const sassRules = require('./sassRules');

const clientConfig = {
  ...baseConfig,
  name: 'client',
  entry: {
    app: paths.entries.client,
  },
  module: {
    ...baseConfig.module,
    rules: [
      ...baseConfig.module.rules,
      sassRules.client,
    ],
  },
  output: {
    path: paths.outputs.scripts,
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../styles/[name].css',
      chunkFilename: '../styles/[id].css',
    }),
  ],
};

module.exports = clientConfig;
