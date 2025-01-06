const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/popup.tsx',
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "." },
        { from: "manifest.json", to: "." },
        { from: "images", to: "images" },
        { from: "_locales", to: "_locales" }
      ],
    }),
  ],
};