const paths = require('./paths');

const baseConfig = {
  mode: 'development',
  devtool: 'eval-source-map', // Use in dev only, different option/remove in prd
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
      pages: paths.project.pages,
    },
  },
};

module.exports = baseConfig;
