module.exports = {
  development: {
    PORT: 8080,
    SERVE_STATIC: true,
    PROJECT_URL: 'http://127.0.0.1',
  },
  production: {
    PORT: 3000,
    SERVE_STATIC: false,
    PROJECT_URL: 'https://tamsui.dev',
  },
};
