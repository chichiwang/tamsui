const paths = require('./paths');
const baseConfig = require('./base');

const clientConfig = {
  ...baseConfig,
  name: 'client',
  entry: {
    app: paths.entries.client,
  },
  output: {
    path: paths.outputs.scripts,
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = clientConfig;
