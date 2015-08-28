var DateFormat = require('date-format');

var defaultFormat = 'yyyy-MM-dd';

var formatDate = function(date, format) {
  if(format) return DateFormat(format, date);
  else return DateFormat(defaultFormat, date);
};

module.exports.format = function(date, format) {
  return formatDate(date, format);
}

module.exports.today = function(format) {
  var now = new Date();
  return formatDate(now, format);
};

module.exports.yesterday = function(format) {
  var now = new Date();
  now.setDate(now.getDate()-1);
  return formatDate(now, format);
};

module.exports.dayOffset = function(date, offset, format) {
  date.setDate(date.getDate() + offset);
  return formatDate(date, format);
};

module.exports.weekOffset = function(date, offset, format) {
  date.setDate(date.getDate() + (offset*7));
  return formatDate(date, format);
};

module.exports.monthOffset = function(date, offset, format) {
  date.setMonth(date.getMonth() + offset);
  return formatDate(date, format);
};

module.exports.yearOffset = function(date, offset, format) {
  date.setYear(date.getYear() + offset);
  return formatDate(date, format);
};

module.exports.DEFAULT_FORMAT = defaultFormat;
