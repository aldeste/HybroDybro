const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.base')({
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    join(process.cwd(), 'src/index.js'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: join(process.cwd(), 'www'),
    publicPath: '/',
  },
  styleLoader: [
    'style-loader',
    'css-loader?modules&importLoaders=1&localIdentName=[path]-[name]-[ext]_[local]',
    'postcss-loader',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: join(process.cwd(), 'src/index.html'),
    }),
  ],
  performance: { hints: false },
  devServer: {
    hot: true,
    inline: true,
    compress: true,
    // Serve gzipped versions of everything for better
    // bottleneck troubleshooting
    watchOptions: { ignored: /node_modules/ },
    // Ignore node_modules, as this can cause memory issues on some machines
    historyApiFallback: true,
    // This all requests will be sent to index.html, as we're using a
    // history API based router.
    contentBase: join(process.cwd(), 'build'),
    publicPath: '/',
    stats: 'errors-only',
  },
});
