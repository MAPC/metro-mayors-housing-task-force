const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: {
    bundle: './src/js/index.jsx'
  },
  devtool: 'source-map',
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.
    // if using GitHub Pages, use the following:
    // path: "assets/javascripts"
    path: __dirname + '/public',
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      { from: __dirname + '/public/favicon.ico' }, // <- your path to favicon
    ]),
  ],
  devServer: {
    contentBase: __dirname + '/public',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // "babel-loader" is also a legal name to reference
        query: {
          presets: ['react', 'es2015'],
          plugins: [
            require('babel-plugin-transform-object-rest-spread'),
            require('babel-plugin-root-import').default,
          ],
        }
      }, {
        test: /\.scss$/,
        include: __dirname + '/src/sass',
        loader: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }, 'sass-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  performance: {
    hints: false
  }
};
