const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PATH_DIST = path.resolve(__dirname, 'dist')
const PATH_SRC = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: PATH_DIST,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    modules: [].concat(PATH_SRC, 'node_modules'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATH_SRC, 'index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    host: 'localhost',
  },
}
