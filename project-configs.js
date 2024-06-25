module.exports = {
  development: {
    PORT: 8080,
    SERVE_STATIC: true,
    PROJECT_URL: JSON.stringify('http://127.0.0.1:8080'),
  },
  production: {
    PORT: 3000,
    SERVE_STATIC: false,
    PROJECT_URL: JSON.stringify('https://tamsui.dev'),
  },
};
