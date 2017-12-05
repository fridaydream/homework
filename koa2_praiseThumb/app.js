const Koa = require('koa');
const app = new Koa();
const router = require('koa-simple-router');
const serve = require('koa-static');
const convert = require('koa-convert');
const path = require('path');
const render = require('koa-swig');
const co = require('co');
const underscore = require('underscore');
const request = require('request');
app.context.render = co.wrap(render({
    root: path.join(__dirname, './views'),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));
app.use(router(_ => {
    _.get('/', (ctx, next) => {
        ctx.body = 'hello';
    });
    _.get('/index/index', async(ctx, next) => {
        ctx.body = await ctx.render('index.html');
    });
    _.get('/index/index', async(ctx, next) => {
        console.log('ok-----');
        request('http://172.20.10.13/phptest/mysql.php', function(error, data) {
            if (error) {
                return console.log('error');
            }
            console.log(data);
        });
    });
}));
app.use(convert(serve(path.join(__dirname, './public'))));
app.listen(3001, () => {
    console.log('server started');
})