const path = require('path');
const CopyPkgJsonPlugin = require('copy-pkg-json-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: path.resolve(__dirname, 'src', 'index.ts'),

  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: {
      type: 'commonjs'
    }
  },

  stats: {
    colors: true,
    hash: false,
    version: false
  },

  devtool: 'source-map',

  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'src', 'tsconfig.json')
          }
        }
      },
    ],
  },

  plugins: [
    new CopyPkgJsonPlugin({
        new: {
          "name": "ts-checked-fsm",
          "version": "1.1.0",
          "description": "A typescript library for defining state machine types with compile-time transition validation. Types are fun.",
          "main": "index.js",
          "typings": "types/index.d.ts",
          "author": "Rick Weber",
          "license": "ISC",
        },
    })
  ]
};

