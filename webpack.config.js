const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const autoprefixer = require("autoprefixer")


// var okay = {
//   test: /\.css$/,
//   loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
// }

devServer = {
  contentBase: path.resolve(__dirname, './endpoint'),
  colors: true,
  quiet: false,
  noInfo: false,
  publicPath: '/static/',
  historyApiFallback: false,
  host: '127.0.0.1',
  lazy: true,
  port: 1002,
  hot: false
};


module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://' + devServer.host + ':' + devServer.port,
    // './style'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        // test: /\.js?$/,
        test: /\.(js|jsx)$/,
        // use: {
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
        // }
      },
      // {
      //   test: /\.css$/,
      //   // loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]','postcss-loader')
      //   use: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      // }
      // {
      //   // Transform our own .css files with PostCSS and CSS-modules
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.css$/,
      //   include: /node_modules/,
      //   use: ['style-loader', 'css-loader'],
      // }    ]
      {
        test: /\.css$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]      }
    ]
  },
  plugins: [
    // new autoprefixer({}),
    // new ExtractTextPlugin({
    //   filename: 'style.css',
    //   allChunks: true
    // }),
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
  ],
  // resolve: {
  //   extensions: ['.js', '.jsx']
  // },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 1001,
  }
};


// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           fallback: "style-loader",
//           use: "css-loader"
//         })
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin("styles.css"),
//   ]
// }