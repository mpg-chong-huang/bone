'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base');

process.env.MODE = 'dev';

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: 'inline-source-map',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: path.join(__dirname, '../src/'),
    compress: true,
    host: 'localhost',
    port: 8081,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
  ]
});

module.exports = devWebpackConfig;
