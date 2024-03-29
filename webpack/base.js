const paths = require('./paths');
const env = require('./env');

const baseConfig = {
  mode: env.get(),
  devtool: env.isProd ? 'source-map' : 'eval-source-map',
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
