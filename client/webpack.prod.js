const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    app: [
      "./src/index.js",
      "babel-polyfill"
    ],
  },
  output: {
    path: __dirname,
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
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
            'postcss-loader'
          ]
        }),
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          }
        },
      }),
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
}