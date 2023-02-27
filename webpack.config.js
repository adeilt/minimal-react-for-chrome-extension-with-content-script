const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/background.js',
  output: {
    filename: './dist/background.bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  mode: 'none'
}
