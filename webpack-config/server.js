/* eslint import/no-extraneous-dependencies: 0 */
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const paths = require('./paths');
const baseConfig = require('./base');
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
  output: {
    path: paths.outputs.root,
    filename: 'index.js',
  },
  plugins: [
    new NodemonPlugin({
      watch: [paths.project.app, paths.project.client, paths.project.server],
      ignore: ['/__tests__/', '**.test.*'],
    }),
  ],
};

module.exports = serverConfig;
