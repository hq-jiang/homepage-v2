const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/',
    filename: 'index_bundle.js'
  },
  // Style loaders
  module: {
    rules:[
      {
      test: /\.s[ac]ss$/i,
      use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./"
            }
          },
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
      ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            }
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/views/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/views/blog_entries/blogentry_template.html'),
      filename: 'blog_entries/blogentry_template.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/views/blog_entries/01_title.html'),
      filename: 'blog_entries/01_title.html'
    }),
    new MiniCssExtractPlugin()
  ]
};