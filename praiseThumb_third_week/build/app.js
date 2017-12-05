'use strict';

var Koa = require('koa');
var router = require('koa-simple-router');
var render = require('koa-swig');
var initController = require('./controller/initController');
var app = new Koa();
var serve = require('koa-static');
var Config = require('./config/config');
var babel_co = require('babel-core/register');
var babel_po = require('babel-polyfill');
// koa v2.x 
var co = require('co');
initController.init(app, router);
app.context.render = co.wrap(render({
    // ...your setting 
    root: Config.get('viewDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));
app.use(serve(Config.get('staticDir')));
app.listen(Config.get('port'));
module.exports = app;