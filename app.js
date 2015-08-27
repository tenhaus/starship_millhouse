'use strict';
var index = require('./controllers/index');
var messages = require('./controllers/messages');
var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');
var route = require('koa-route');
var koa = require('koa');
var path = require('path');
var app = module.exports = koa();
var middleware = require('webpack-koa-middleware');
var webpackCfg = require('./webpack/config');

// Logger
app.use(logger());

// Routes
app.use(route.get('/', index.root));
app.use(route.get('/async', messages.delay));

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

// Webpack 
app.use(middleware(webpackCfg));

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
