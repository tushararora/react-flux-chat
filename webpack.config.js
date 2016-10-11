const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const NODE_MODULES = path.resolve(__dirname, 'node_modules');

const config = {
  entry: `${SRC_DIR}/app/App.js`,
  output: {
    path: `${DIST_DIR}/assets`,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.jsx?$/,
      include: SRC_DIR,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-2']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?prefix=font/&limit=5000'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.jpg$/,
      loader: 'file'
    }, {
      test: /\.png$/,
      loader: 'file'
    }]
  },
  resolveLoader: {
    root: NODE_MODULES
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: `${SRC_DIR}/index.html`,
      favicon: `${SRC_DIR}/assets/images/favicon.ico`
    })
  ]
};

module.exports = config;
