/* eslint import/no-extraneous-dependencies: 0 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const paths = require('./paths');
const baseConfig = require('./base');
const env = require('./env');
const sassRules = require('./sassRules');

const clientConfig = {
  ...baseConfig,
  name: 'client',
  context: paths.project.root,
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
    path: paths.outputs.root,
    filename: env.isDev ? 'scripts/[name].js' : 'scripts/[name].[contenthash].js',
    chunkFilename: env.isDev ? 'scripts/[id].js' : 'scripts/[id].[contenthash].js',
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
      filename: env.isDev ? 'styles/[name].css' : 'styles/[name].[contenthash].css',
      chunkFilename: env.isDev ? 'styles/[id].css' : 'styles/[id].[contenthash].css',
    }),
    new WebpackManifestPlugin({
      publicPath: '',
    }),
  ],
};

module.exports = clientConfig;
