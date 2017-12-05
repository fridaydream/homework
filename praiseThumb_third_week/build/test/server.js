'use strict';

var requestsuper = require('supertest');
var app = require('../app');

function request() {
	return requestsuper(app.listen());
}
describe('test router', function () {
	it('praise', function (done) {
		request().get('/index/update').expect(200).end(function (err, res) {
			if (res.data == 1) return done(err);
			done();
		});
	});
});