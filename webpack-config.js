/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');

const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const projectRootDir = __dirname;
const outputDir = path.resolve(projectRootDir, 'dist');
const outputScriptsDir = path.resolve(outputDir, 'scripts');

const clientDir = path.resolve(projectRootDir, 'client');
const clientRootFile = path.resolve(clientDir, 'entry.tsx');

const serverDir = path.resolve(projectRootDir, 'server');
const serverRootFile = path.resolve(serverDir, 'index.tsx');

const baseConfig = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
      },
    }],
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjs', '.tsx', '.jsx', '...'],
    alias: {
      client: clientDir,
    },
  },
};

const clientConfig = {
  ...baseConfig,
  name: 'client',
  entry: clientRootFile,
  output: {
    path: outputScriptsDir,
    filename: 'app.js',
  },
};

const serverConfig = {
  ...baseConfig,
  name: 'server',
  dependencies: ['client'],
  entry: serverRootFile,
  target: 'node',
  externalsPresets: {
    node: true,
  },
  externals: [
    nodeExternals(),
  ],
  output: {
    path: outputDir,
    filename: 'index.js',
  },
  plugins: [
    new NodemonPlugin({
      watch: [clientDir, serverDir],
      ignore: ['/__tests__/', '**.test.*'],
    }),
  ],
};

module.exports = [clientConfig, serverConfig];
