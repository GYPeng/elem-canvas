const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
    library: 'finalModule',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: [".js", ".ts", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
