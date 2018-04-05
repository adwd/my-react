const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

const config = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: prod ? '[chunkhash].bundle.js' : 'bundle.js'
  },
  devtool: prod ? undefined : 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          path.resolve(__dirname, "src/stories"),
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
    }),
    new CopyWebpackPlugin([{
      from: './public',
      to: ''
    }]),
  ]
};

module.exports = config;
