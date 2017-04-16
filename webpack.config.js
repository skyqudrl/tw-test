'use strict';

const config = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  plugins: [],
  module: {
    loaders : [
      { test: /\.html$/, loader: "html-loader" },
    ]
  }
};


module.exports = config;
