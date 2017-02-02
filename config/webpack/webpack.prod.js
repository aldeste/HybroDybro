const {join} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const PurifyCSSPlugin = require('purifycss-webpack-plugin');

module.exports = require('./webpack.base')({
  entry: {
    main: join(process.cwd(), 'src/index.js'),
    vendor: [
      'react',
      'react-router',
    ],
  },

  styleLoader: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: [
      'css-loader?modules&importLoaders=1&localIdentName=[emoji]',
      'postcss-loader',
    ],
  }),

  // Utilize long-term caching by adding content hashes to compiled assets
  output: {
    filename: '[name].[chunkhash:5].js',
    chunkFilename: '[name].[chunkhash:5].js',
    path: './www',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      children: true,
      minChunks: 2,
      async: true,
    }),

    // Merge diplicate modules
    new webpack.optimize.DedupePlugin(),

    // Extract css files
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),

    // new PurifyCSSPlugin({
    //   basePath: process.cwd(),
    // }),

    // Minify output
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
      sourceMap: false,
    }),

    // Generate minified and optimized index.html from template
    new HtmlWebpackPlugin({
      template: join(process.cwd(), 'src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],

  devtool: false,
});
