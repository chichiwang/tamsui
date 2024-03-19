const paths = require('./paths');

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
      app: paths.project.app,
    },
  },
};

module.exports = baseConfig;
