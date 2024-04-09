/* eslint import/no-extraneous-dependencies: 0 */
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const paths = require('./paths');
const env = require('./env');

const typescriptRule = require('./rules/typescript');
const sassInlineRule = require('./rules/sass.inline');
const resolve = require('./resolve');

const config = {
  mode: env.get(),
  name: 'server',
  context: paths.project.root,
  entry: paths.entries.server,
  target: 'node',
  externalsPresets: {
    node: true,
  },
  externals: [
    nodeExternals(),
  ],
  module: {
    rules: [
      typescriptRule,
      sassInlineRule,
    ],
  },
  output: {
    path: paths.outputs.root,
    filename: 'index.js',
  },
  plugins: [
    ...(env.isProd ? [] : [new NodemonPlugin({
      watch: [
        paths.outputs.root,
      ],
      ignore: ['/__tests__/', '**.test.*'],
    })]),
  ],
  resolve,
};

module.exports = config;
