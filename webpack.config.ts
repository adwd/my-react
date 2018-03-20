import webpack from 'webpack';
import path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: '[chunkhash].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' }
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
}

export default config;
