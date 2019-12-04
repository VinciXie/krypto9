const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: "style-loader",
      //       loader: "css-loader"
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./assets/favicon.ico"
    })
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'assets')],
    compress: true,
    port: 9000,
  }
};

module.exports = config;