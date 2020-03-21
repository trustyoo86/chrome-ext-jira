'use strict';

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// src path
const srcPath = path.resolve(__dirname, '..', 'src');
const distPath = path.resolve(__dirname, '..', 'dist');

module.exports = {
  entry: {
    'popup': path.join(srcPath, 'popup/main.ts'),
    'background': path.join(srcPath, 'background.ts'),
    'content': path.join(srcPath, 'content.ts'),
  },

  output: {
    path: distPath,
    publicPath: '',
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          js: 'ts-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.vue', '.ts', '.json'],
    alias: {
      '@': srcPath,
      'vue$': 'vue/dist/vue.esm.js',
    },
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      vue: true,
      template: path.join(srcPath, 'popup', 'index.html'),
      filename: path.join(distPath, 'index.html'),
      inject: false,
      files: {
        css: [],
        js: [
          'popup.js',
        ],
      },
    }),
  ],
};
