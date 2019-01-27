/* eslint-disable */
const CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '',
    filename: 'js/bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src/img/architects'), to: 'img/architects', flatten: true },
      { from: path.join(__dirname, 'src/img/buildings'), to: 'img/buildings', flatten: true },

      // { from: path.join(__dirname, 'src//*.jpg'), to: 'img', flatten: true },
      // { from: path.join(__dirname, 'src//.svg'), to: 'images', flatten: true },
      // { from: path.join(__dirname, 'src/**/.mp3'), to: 'sounds', flatten: true },
      // { from: path.join(__dirname, 'src/*/.wav'), to: 'audio', flatten: true },
      // { from: path.join(__dirname, 'src//*.ttf'), to: 'fonts', flatten: true },
      // { from: path.join(__dirname, 'src//.otf'), to: 'fonts', flatten: true },
      // { from: path.join(__dirname, 'src/**/.json'), to: 'jsons', flatten: true },
    ], {}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'img/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(mp3|wav)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: 'audio/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};
