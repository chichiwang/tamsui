const nodeEnv = process.env.NODE_ENV;

const development = 'development';
const production = 'production';
const prodStrings = [
  'prd',
  'prod',
  'production',
];

const isProd = (function checkIfProd() {
  if (nodeEnv === undefined) {
    return false;
  }

  return prodStrings.includes(nodeEnv.toLowerCase());
})();

const isDev = !isProd;

function get() {
  return isProd ? production : development;
}

const env = {
  get,
  isDev,
  isProd,
};

module.exports = env;
