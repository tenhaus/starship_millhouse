var Yahoo = require('yahoo-finance');
var MarketData = require('../lib/MarketData');

module.exports.test = function *test() {
  this.body = yield {test: 'test'};
};

module.exports.symbols = function *symbols() {
  this.body = yield MarketData.symbols;
};
