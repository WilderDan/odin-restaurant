const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      favicon: "./src/favicon.ico",
      inject: "body",
    }),
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
