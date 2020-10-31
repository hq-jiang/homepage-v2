const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  // Style loaders
  module: {
    rules:[
      {
      test: /\.s[ac]ss$/i,
      use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
      ],
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/views/index.html')
    }),
    new MiniCssExtractPlugin()
  ]
};