/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2020-02-11 16:15:33
 * @LastEditors  : starkwang
 * @LastEditTime : 2020-02-19 16:27:18
 * @Description: file content
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const AsyncChunkNames = require("webpack-async-chunk-names-plugin");

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.styl$/,
      use: ['style-loader', 'css-loader', 'stylus-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    // new AsyncChunkNames()
  ],
  optimization:{
    splitChunks: {
      cacheGroups:{
        common: {
          name: "common",
          minChunks: 1,
          chunks: "async",
          priority: 10,
          minSize:3000,
          reuseExistingChunk: true,
        }
      }
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
}
