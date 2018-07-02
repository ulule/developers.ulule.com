var webpack = require("webpack");
var path = require("path");
var PathRewriterPlugin = require("webpack-path-rewriter");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var baseDir = path.resolve(__dirname);
var production = process.env.NODE_ENV === "production";

module.exports = {
  context: `${baseDir}/src`,

  entry: {
    style: "./sass/style.scss",
    main: "./index.js",
    authorize: "./img/authorize.jpg",
    form: "./img/form.jpg",
    index: "./index.html"
  },

  output: {
    path: `${baseDir}/static`,
    filename: "js/[name]-[chunkhash].js",
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
        test: /img\/.+\.(gif|png|ico|jpg)(\?.+)?$/,
        loader: `file-loader?name=img/[name].[ext]`
      },
      {
        test: /\.html$/,
        loader: PathRewriterPlugin.rewriteAndEmit({
          name: '../layouts/[name].[ext]',
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin(`css/[name]-[chunkhash].css`),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new PathRewriterPlugin({
      emitStats: 'stats.json'
    })
  ]
};
