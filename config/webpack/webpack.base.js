const {resolve} = require('path');
const webpack = require('webpack');

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({
    path: resolve(process.cwd(), 'www'),
    filename: '[name].js',
  }, options.output),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: [
          'babel-loader?cacheDirectory',
        ],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loader: options.styleLoader,
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]&limit=10000',
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10000',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
    extensions: [
      '.js',
    ],
  },

  plugins: options.plugins.concat([

    // Needed for long-term caching to work
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),

    // Pollyfills are automatically required uppon request using ProvidePlugin.
    // For example, if fetch is used, isomorphic-fetch will be included
    new webpack.ProvidePlugin({
      fetch: 'isomorphic-fetch',
    }),
  ]),
  devtool: options.devtool,
  target: 'web',
  stats: false,

  performance: Object.assign({}, options.performance),

  devServer: Object.assign({}, options.devServer),
});
