const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry : './script/index.js',
  output : {
    filename: 'bundle.js'
  },
  module : {},
  plugins : [
    new webpack.SourceMapDevToolPlugin()
  ]
}
