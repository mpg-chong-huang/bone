'use strict'
const path = require('path');
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '../'),
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader', // inject CSS to page
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(woff2?|eot|ttf|otf|woff)(\?.*)?$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'],
  },
};
