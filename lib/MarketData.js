
var Yahoo = require('yahoo-finance');
var Symbols = require('../data/symbols.json');

var DateFormat = require('date-format');



module.exports.historicalForSymbol = function(symbol, start, end) {
  
  var now = new Date();
  var twentyYearsBeforeNow = new Date();
  twentyYearsBeforeNow.setFullYear(now.getFullYear() - 20);
  
  var parameters = {
    symbol: symbol,
    start: dateFormat(twentyYearsBeforeNow, "yyyy-mm-dd"),
    end: dateFormat(now, "yyyy-mm-dd")
  };
  
  if(start && end) {
    parameters.from = start;
    parameters.to = end;
  }
  
  var data = Yahoo.historical({
    symbol: symbol,
    from: '2000-08-21',
    to: '2015-08-25'
  });
};

module.exports.symbols = Symbols;