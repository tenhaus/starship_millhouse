/*global describe, it*/
'use strict';
var superagent = require('supertest');
var app = require('../app');
var expect = require('expect.js');

function request() {
	return superagent(app.listen());
}

describe('Routes', function () {
  
	describe('GET /', function () {
    it('should return 200', function (done) {
      request()
        .get('/')
        .expect(200, done);
    });
  });
	
	describe('GET /api/test', function () {
    it('should return {test:test}', function (done) {
      request()
        .get('/api/test')
        .end(function(err, result) {
					expect(result.body).to.eql({test: 'test'});
					done();
				});
    });
  });
  
});