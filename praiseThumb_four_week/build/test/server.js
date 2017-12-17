'use strict';

// const requestsuper=require('supertest');
// const app=require('../app.js');
// function request(){
// 	return requestsuper(app.listen());
// }

// describe('测试路由',function(){
// 	it('点赞',function(done){
// 		request()
// 			.get('/index/update')
// 			.expect(200)
// 			.end(function(err,res){
// 				if(res.data==1){
// 					return done(err);
// 				}
// 				done();
// 			});
// 	});
// });

var requestsuper = require('supertest');
var app = require('../app.js');

function request() {
	return requestsuper(app.listen());
}
describe('test router', function () {
	it('praise', function (done) {
		request(app).get('/index/update').expect(200).end(function (err, res) {
			if (err) return done(err);
			done();
		});
	});
});