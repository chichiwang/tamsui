/* eslint import/no-extraneous-dependencies: 0 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const paths = require('./paths');
const env = require('./env');

const typescriptRule = require('./rules/typescript');
const sassModulesRule = require('./rules/sass.modules');
const resolve = require('./resolve');

const config = {
  mode: env.get(),
  devtool: env.isProd ? 'source-map' : 'eval-source-map',
  name: 'client',
  context: paths.project.root,
  entry: {
    app: paths.entries.client,
  },
  module: {
    rules: [
      typescriptRule,
      sassModulesRule,
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
  resolve,
};

module.exports = config;
