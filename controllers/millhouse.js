var Yahoo = require('yahoo-finance');
var Symbols = require('../data/symbols.json');

module.exports.test = function *test() {
  this.body = yield {test: 'test'};
};

module.exports.symbols = function *symbols() {
  this.body = yield Symbols;
};