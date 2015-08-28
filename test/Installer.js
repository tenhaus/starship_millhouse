/*global describe, it, before */
require('co-mocha');
require('../models/Company');

var expect = require('expect.js');
var mongoose = require('mongoose');
var _ = require('lodash');

var Installer = require('../lib/Installer');
var Company = mongoose.model('Company');

describe('Installer', function() {
  this.timeout(10000);

  before(function(done) {
    Company.remove({}, function(err) {
       done();
    });
  });

  it('Should install companies', function *(done) {
    yield Installer.installCompanies();
    var zsph = yield Company.findOne({symbol: 'ZSPH'});
    expect(zsph).to.be.ok();
    done();
  });

});
