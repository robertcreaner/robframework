var path = require('path');

module.exports = {
  entry: './public/js/index.js',
  output: {
    filename: 'index-bundle.js',
    path: path.resolve(__dirname, './public/js')
  },
  module: {
  	loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
