const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.bundle.js',
  },
  // Rules of how webpack will take our files,
  // complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpe?g|JPE?G|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' }), new MiniCssExtractPlugin()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      myAssets: path.resolve(__dirname, 'src/assets'),
      myComponents: path.resolve(__dirname, 'src/components'),
      myConstants: path.resolve(__dirname, 'src/constants'),
      myPages: path.resolve(__dirname, 'src/pages'),
    },
  },
};
