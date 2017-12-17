'use strict';

var Koa = require('koa');
var router = require('koa-simple-router');
var render = require('koa-swig');
var path = require('path');
var co = require('co');
var serve = require('koa-static');
var babel_co = require('babel-core');
var babel_po = require('babel-polyfill');
var initController = require('./controller/initController');
var CONFIG = require('./config/config');
var app = new Koa();
app.use(serve(CONFIG.get('staticDir')));
app.context.render = co.wrap(render({
    root: CONFIG.get('viewDir'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    writeBody: false
}));
initController.init(app, router);
app.listen(CONFIG.get('port'));
module.exports = app;