/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');

const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const outputDir = path.resolve(__dirname, 'dist');

const serverDir = path.resolve(__dirname, 'server');
const serverRootFile = path.resolve(serverDir, 'index.ts');

module.exports = {
  mode: 'development',
  entry: serverRootFile,
  target: 'node',
  externalsPresets: {
    node: true,
  },
  externals: [
    nodeExternals(),
  ],
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
      },
    }],
  },
  output: {
    path: outputDir,
    filename: 'index.js',
  },
  plugins: [
    new NodemonPlugin({
      watch: serverDir,
      ignore: ['/__tests__/', '**.test.*'],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.mjs', '.tsx', '.jsx', '...'],
  },
};
