// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/inappv5/entry-pc', {
      target: 'https://app.map.naver.com',
      changeOrigin: true,
    }),
  );
};
