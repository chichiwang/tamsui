const paths = require('./paths');

const resolve = {
  extensions: ['.ts', '.js', '.mjs', '.tsx', '.jsx', '...'],
  alias: {
    app: paths.project.app,
    pages: paths.project.pages,
  },
};

module.exports = resolve;
