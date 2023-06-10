const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // Here we are telling webpack to look for a file if it is ending with .css use  style-loader and css-loader
        use: ["style-loader", "css-loader"],
        // webpack will not parse the css files anymore style-loader and css-loader will parse them.
      },
      {
        test: /\[png|svg|jpg|jpeg|gif]$/,
        // Here we are telling webpack to look for a file if it is ending with [png|svg|jpg|jpeg|gif] use asset/resource
        type: ["asset/resource"],
        // webpack will not parse the css files anymore asset/resource will parse them.
      },
    ],
  },
};