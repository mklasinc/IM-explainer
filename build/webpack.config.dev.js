'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    // landingPage: './src/index.js',
    // character: './src/pages/02_character-pick/index.js',
    // main: './src/pages/03_article/index.js'
    main: './src/index.js'
  },
  devServer: {
    compress: true,
    port: 8080
  },
  output: {
    chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname,'../dist')
  },
  plugins: [
    // Jquery plugin
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // landing page
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // chunks: ['landingPage'],
      inject: true
    }),
    // character pick
    new HtmlWebpackPlugin({
      filename: 'character-pick.html',
      template: './src/pages/02_character-pick/character-pick.html',
      // chunks: ['character'],
      // inject: true
    }),
    // Main experience
    new HtmlWebpackPlugin({
      filename: 'article.html',
      template: './src/pages/03_article/article.html',
      // chunks: ['main']
    }),
    new MiniCssExtractPlugin({
      filename: "app.css",
      // chunkFilename: "main.css"
      // chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../assets'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: 'file-loader'
      },
      {
        test: /\.(png|svg|jp?g|gif)$/,
        use: 'file-loader'
      }
    ]
  }
};
