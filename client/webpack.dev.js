const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const autoprefixer = require("autoprefixer")

devServer = {
  colors: true,
  quiet: false,
  noInfo: false,
  publicPath: '/static/',
  historyApiFallback: false,
  host: '127.0.0.1',
  lazy: true,
  port: 1002,
  hot: false
}

module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://' + devServer.host + ':' + devServer.port,
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('ENV_VALUE')
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 1002,
    hot: false
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