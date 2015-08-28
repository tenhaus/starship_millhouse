'use strict';
var messages = require('./controllers/messages');
var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');
var route = require('koa-route');
var koa = require('koa');
var mongo = require('koa-mongo');
var mongoose = require('mongoose');
var path = require('path');
var fs = require("fs");
var app = module.exports = koa();
var middleware = require('webpack-koa-middleware');
var webpackCfg = require('./webpack/config');

// Controllers
var index = require('./controllers/index');
var millhouse = require('./controllers/millhouse');

// Logger
app.use(logger());

// Index Route
app.use(route.get('/', index.root));

// API
app.use(route.get('/api/test', millhouse.test));
app.use(route.get('/api/symbols', millhouse.symbols));

// Something that came with koa
app.use(route.get('/async', messages.delay));

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

// Webpack
app.use(middleware(webpackCfg));

// Mongo
// app.use(mongo({
//   host: 'localhost',
//   port: 27017,
//   db: 'millhouse',
//   max: 100,
//   min: 1,
//   timeout: 30000,
//   log: false
// }));

// Mongoose connection
mongoose.connect('mongodb://localhost/millhouse');
mongoose.connection.on("error", function(err) {
  console.log(err);
});

// Mongoose models
var modelsPath = path.join(__dirname, 'models');

fs.readdirSync(modelsPath).forEach(function(file) {
  if (~file.indexOf("js")) {
    require(modelsPath + "/" + file);
  }
});

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
