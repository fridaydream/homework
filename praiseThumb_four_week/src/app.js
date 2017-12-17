const Koa = require('koa');
const router = require('koa-simple-router');
const render = require('koa-swig');
const path=require('path');
const co = require('co');
const serve=require('koa-static');
const babel_co =require('babel-core');
const babel_po =require('babel-polyfill');
const initController=require('./controller/initController');
const CONFIG=require('./config/config');
const app = new Koa();
app.use(serve(CONFIG.get('staticDir')));
app.context.render = co.wrap(render({
    root: CONFIG.get('viewDir'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    writeBody: false
}));
initController.init(app,router);
app.listen(CONFIG.get('port'));
module.exports=app;