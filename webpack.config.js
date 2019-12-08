const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);


const config = {
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

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
    
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'assets')],
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
    config.plugins.push(new CopyPlugin([
      { from: 'assets', to: '.' },
    ]), new MiniCssExtractPlugin())
  } else {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    })
  }
  return config;
};
