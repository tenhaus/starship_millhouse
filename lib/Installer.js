var Dates = require('./Dates');
var MarketData = require('./MarketData');
var _ = require('lodash');
var Mongoose = require('mongoose');
var CompanyModel = require('../models/Company');
var Company = Mongoose.model('Company');

module.exports.installCompanies = function *() {

  yield _.map(MarketData.symbols, function *(symbol) {
    var company = new Company({
      symbol: symbol.Symbol,
      name: symbol.Name,
      ipoYear: symbol.IPOyear,
      sector: symbol.Sector,
      industry: symbol.Industry
    });

    yield company.save();
  });
};

module.exports.syncCompanies = function() {
};
