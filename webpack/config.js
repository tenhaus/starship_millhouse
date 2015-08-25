module.exports = {

    context: __dirname + "/../public/scripts",
    entry: "./app.js",

    output: {
      path: __dirname,
      filename: "bundle.js"
    },

    module: {
      loaders: [
        {test: /\.css$/, loader: "style!css" },
        {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]}
      ]
    }
};
