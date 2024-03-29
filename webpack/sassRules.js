/* eslint import/no-extraneous-dependencies: 0 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = {
  test: /\.s[ac]ss$/,
  use: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
};

const client = {
  ...base,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    ...base.use,
  ],
};

const server = {
  ...base,
  use: [
    'style-loader',
    ...base.use,
  ],
};

module.exports = {
  server,
  client,
};
