const index=require('./indexController');
const controllerInit = {
    init(app, router) {
        app.use(router(_ => {
            _.get('/index/index', index.index());
            _.get('/index/update', index.update());
        }));
    }
}
module.exports=controllerInit;