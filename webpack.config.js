const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './app.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  mode: 'none'
}
