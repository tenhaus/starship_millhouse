/*global describe, it*/
var expect = require('expect.js');
var _ = require('lodash');

var Dates = require('../lib/Dates');
var DateFormat = require('date-format');

describe('Dates', function() {

  it('Should format a date', function(done) {
    var now = new Date();
    var formattedDate = Dates.format(now);

    expect(formattedDate).to.eql(DateFormat(Dates.DEFAULT_FORMAT, now));
    done();
  });

  it('Should format today', function(done) {
    var formattedDate = Dates.today();
    var now = new Date();

    expect(formattedDate).to.eql(DateFormat(Dates.DEFAULT_FORMAT, now));
    done();
  });

  it('Should format yesterday', function(done) {
    var formattedDate = Dates.yesterday();
    var now = new Date();
    now.setDate(now.getDate()-1);

    expect(formattedDate).to.eql(DateFormat(Dates.DEFAULT_FORMAT, now));
    done();
  });

  it('Should offset positive days', function(done) {
    var date = new Date(1980, 08, 10);
    var formattedDate = Dates.dayOffset(date, 2);
    expect(formattedDate).to.eql('1980-09-12');
    done();
  });

  it('Should offset negative days', function(done) {
    var date = new Date(1980, 08, 10);
    var formattedDate = Dates.dayOffset(date, -2);
    expect(formattedDate).to.eql('1980-09-08');
    done();
  });

  it('Should offset weeks', function(done) {
    var date = new Date(1980, 08, 10);
    var formattedDate = Dates.weekOffset(date, 1);
    expect(formattedDate).to.eql('1980-09-17');
    done();
  });

  it('Should offset months', function(done) {
    var date = new Date(1980, 08, 10);
    var formattedDate = Dates.monthOffset(date, 1);
    expect(formattedDate).to.eql('1980-10-10');
    done();
  });

  it('Should offset years', function(done) {
    var date = new Date(1980, 08, 10);
    var formattedDate = Dates.yearOffset(date, 10);
    expect(formattedDate).to.eql('1990-09-10');
    done();
  });

  it('Should roll to the next month', function(done) {
    var date = new Date(1980, 08, 30);
    var formattedDate = Dates.dayOffset(date, 1);
    expect(formattedDate).to.eql('1980-10-01');
    done();
  });

});
