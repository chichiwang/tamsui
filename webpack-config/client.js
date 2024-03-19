const paths = require('./paths');
const baseConfig = require('./base');

const clientConfig = {
  ...baseConfig,
  name: 'client',
  entry: paths.entries.client,
  output: {
    path: paths.outputs.scripts,
    filename: 'app.js',
  },
};

module.exports = clientConfig;
