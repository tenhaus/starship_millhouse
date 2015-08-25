'use strict'
var views = require('co-views');

var render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.react = function *react() {
  this.body = yield render('react');
};
