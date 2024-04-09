/* eslint import/no-extraneous-dependencies: 0 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaders = require('./sass.loaders');

const rule = {
  test: /\.s[ac]ss$/,
  use: [
    { loader: MiniCssExtractPlugin.loader },
    ...loaders,
  ],
};

module.exports = rule;
