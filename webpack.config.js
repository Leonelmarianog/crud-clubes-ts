const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
    mainFields: ['main', 'module'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader' }],
        exclude: [/__tests__/],
      },
    ],
  },
  plugins: [new NodemonPlugin()],
  stats: 'minimal',
  watch: NODE_ENV === 'development',
};
