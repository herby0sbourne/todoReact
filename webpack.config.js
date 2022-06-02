const path = require('path');
const webpack = require('webpack');

module.exports = {
  // entry: '/storeSetup.js',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },

  devtool: 'inline-source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      // watch: true,
    },
    // hot: true,
    // historyApiFallback: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
};
