'use strict';
var landing = require('./controllers/landing');
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

app.use(route.get('/', landing.react));
app.use(route.get('/messages', messages.list));
app.use(route.get('/messages/:id', messages.fetch));
app.use(route.post('/messages', messages.create));
app.use(route.get('/async', messages.delay));

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

app.use(middleware(webpackCfg));

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
