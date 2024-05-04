const env = require('../env');

const loaders = [{
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: env.isProd ? '[hash:base64]' : '[path][name]__[local]',
    },
    sourceMap: true,
  },
},
{
  loader: 'sass-loader',
  options: {
    sourceMap: true,
  },
}];

module.exports = loaders;
