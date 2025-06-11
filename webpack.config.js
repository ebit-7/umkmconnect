const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    open: true,
    hot: true,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/streamlit'],
        target: 'http://localhost:8501',
        changeOrigin: true,
        pathRewrite: { '^/streamlit': '' },
        ws: true,
        onProxyRes: (proxyRes) => {
          // Remove headers that prevent iframe embedding
          if (proxyRes.headers['x-frame-options']) {
            delete proxyRes.headers['x-frame-options'];
          }
          if (proxyRes.headers['content-security-policy']) {
            delete proxyRes.headers['content-security-policy'];
          }
        },
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
