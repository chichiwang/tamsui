const loaders = require('./sass.loaders');

const rule = {
  test: /\.s[ac]ss$/,
  use: [
    'style-loader',
    ...loaders,
  ],
};

module.exports = rule;
