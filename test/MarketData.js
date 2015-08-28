/*global describe, it*/
var expect = require('expect.js');
var _ = require('lodash');

var MarketData = require('../lib/MarketData');

describe('Symbols', function() {

  //
  it('should return valid symbols', function(done) {
    _.forEach(MarketData.symbols, function(symbol) {
      if(symbol.Symbol === 'AAPL') done();
    });
  });

});

describe('Sync', function() {

  //
  if('Should load 20 years if date range not specified', function(done) {
  });

  //
  it('Should detect missing symbol data', function(done) {
  });

  //
  it('Should detect partial date range', function(done) {
  });

  //
  it('Should load missing data', function(done) {
  });

});
