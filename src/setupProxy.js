const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/streamlit',
    createProxyMiddleware({
      target: 'http://localhost:8501',
      changeOrigin: true,
      pathRewrite: { '^/streamlit': '' },
      onProxyRes: (proxyRes) => {
        if (proxyRes.headers['x-frame-options']) delete proxyRes.headers['x-frame-options'];
        if (proxyRes.headers['content-security-policy']) delete proxyRes.headers['content-security-policy'];
      },
      logLevel: 'debug',  // aktifkan log supaya tahu proxy jalan
    })
  );
};
