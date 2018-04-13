var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: 'webpack-bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      { 
        test: /\.(tsx?)|(js)$/,
        loader: 'babel-loader', 
        exclude: /node_modules/,
      }
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, "./"),
    watchContentBase: true
  }
};