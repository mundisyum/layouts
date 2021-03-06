const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    watchContentBase: true,
    host: '0.0.0.0', // uncomment if you want to get access from local network
    port: 8999,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          outputPath: 'images',
          name: '[name].[ext]',
        }
      },
    ]
  }
})