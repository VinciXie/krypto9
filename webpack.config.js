const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            loader: 'css-loader',
          }
        ]
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./public/index.html"
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  },
}

module.exports = config;