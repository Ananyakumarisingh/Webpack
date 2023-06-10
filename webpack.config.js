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
      // {
      //   test: /\[png|svg|jpg|jpeg|gif]$/,
      //   // Here we are telling webpack to look for a file if it is ending with [png|svg|jpg|jpeg|gif] use asset/resource
      //   type: ["asset/resource"],
      //   // webpack will not parse the [png|svg|jpg|jpeg|gif] files anymore asset/resource will parse them.
      // },
      {
        test: /\.js$/,
        // Here we are telling webpack to look for a file ending with .js use babel-loader
        use: ["babel-loader"],
        // webpack will not parse the js files anymore babel-loader will parse them.
        exclude: /node_modules/
      },
    ],
  },
};