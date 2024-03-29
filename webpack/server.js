/* eslint import/no-extraneous-dependencies: 0 */
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const paths = require('./paths');
const env = require('./env');
const baseConfig = require('./base');
const sassRules = require('./sassRules');
const clientConfig = require('./client');

const serverConfig = {
  ...baseConfig,
  name: 'server',
  dependencies: [clientConfig.name],
  entry: paths.entries.server,
  target: 'node',
  externalsPresets: {
    node: true,
  },
  externals: [
    nodeExternals(),
  ],
  module: {
    ...baseConfig.module,
    rules: [
      ...baseConfig.module.rules,
      sassRules.server,
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
};

module.exports = serverConfig;
