const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';
console.log(isProduction);
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
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              url: false,
              sourceMap: true,
              // importLoader: 2,
            },
          },
          // {
          //   loader: 'resolve-url-loader', //resolve-url-loader needs to come *BEFORE* sass-loader
          //   options: {
          //     sourceMap: true,
          //   },
          // },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
