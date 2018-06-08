var webpack = require("webpack");
var path = require("path");
var PathRewriterPlugin = require("webpack-path-rewriter");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var baseDir = path.resolve(__dirname, "static");
var production = process.env.NODE_ENV === "production";

module.exports = {
  context: `${baseDir}/site/src`,

  entry: {
    style: "./sass/style.scss",
    main: "./js/main.js"
  },

  output: {
    path: `${baseDir}/site/build`,
    filename: "js/[name].js",
    publicPath: "../"
  },

  bail: production,

  resolve: {
    extensions: [".js", ".scss", ".css", ".png", ".jpg", ".ico", ".gif"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          // activate source maps via loader query
          "css-loader?sourceMap",
          "postcss-loader",
          "sass-loader?sourceMap"
        ])
      },
      {
        test: /fonts\/.+\.(woff|woff2|ttf|otf|eot|svg)(\?.+)?$/,
        loader: `file-loader?name=fonts/[name].[ext]`
      },
      {
        test: /img\/.+\.(gif|png|ico|jpg)(\?.+)?$/,
        loader: `file-loader?name=img/[name].[ext]`
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin(`css/[name].css`),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
