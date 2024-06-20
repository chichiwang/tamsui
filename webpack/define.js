/* eslint-disable global-require, import/no-extraneous-dependencies */
const webpack = require('webpack');
const env = require('./env');

let configs;

try {
  configs = require('../project-configs');
} catch (_) {
  throw new Error('Missing project-configs.js in project root! Run `npm create-config` to initialize.');
}

module.exports = new webpack.DefinePlugin({
  ...(configs[env.get()]),
});
