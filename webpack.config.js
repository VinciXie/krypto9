const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.ttf$/i,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
    
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
    compress: true,
    port: 9000,
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    })
    config.plugins.push(
      new CleanWebpackPlugin(),
      new CopyPlugin([
        { from: 'public', to: '.', ignore: ['*.html', 'favicon.ico', '.DS_Store'] },
      ]),
      new MiniCssExtractPlugin()
    )
  } else {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    })
  }
  return config;
};
