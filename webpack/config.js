var path = require('path');
var webpack = require('webpack');

module.exports = {

    context: path.join(__dirname, "/../client"),
    entry: {
      index: "./index.js"
    },

    output: {
      path: __dirname,
      filename: "bundle.js"
    },

    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {stage: 1}},
        {test: /\.scss$/, loader: "style!css!sass"},
        {
          test: /.*\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        },
      ]
    },
    devtool: '#source-map',
    devServer: {
      host: process.env.USER_IP || 'localhost',
      port: 8090,
      publicPath: '/',        // Where webpack exposes bundles
      hot: false,                  //  on its own in-memory file system
      indexEntry: 'index',    // Entry to add HNR code to (EntryChunk or CommonsChunk)
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
