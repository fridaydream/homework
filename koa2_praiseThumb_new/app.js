const Koa = require('koa');
const router = require('koa-simple-router');
const render = require('koa-swig');
const initController = require('./controller/initController');
const app = new Koa();
const serve=require('koa-static');
const Config=require('./config/config');
// koa v2.x 
const co = require('co');
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
module.exports=app;


