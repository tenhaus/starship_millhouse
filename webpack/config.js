var path = require('path');
var webpack = require('webpack');

module.exports = {

    context: path.join(__dirname, "/../public/scripts"),
    entry: {
      app: "./app.js"
    },

    output: {
      path: __dirname,
      filename: "bundle.js"
    },

    module: {
      loaders: [
        {test: /\.css$/, loader: "style!css" },
        {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"]}
      ]
    },
    devtool: '#source-map',
    devServer: {
      host: process.env.USER_IP || 'localhost',
      port: 8090,
      publicPath: '/',        // Where webpack exposes bundles
      hot: true,                  //  on its own in-memory file system
      indexEntry: 'app',    // Entry to add HNR code to (EntryChunk or CommonsChunk)
      secure: true,           // use https or http
      stats: {
        colors: true,
        hash: false,
        timings: false,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: false,
        children: true
      }
    },
};
