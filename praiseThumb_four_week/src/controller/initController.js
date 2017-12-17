const index=require('./indexController');
const controllerInit={
	init(app,router){
		app.use(router(_=>{
			_.get('/index/index',index.index());
			_.get('/index/update',index.update());
			_.get('/index/star',index.star());
			_.get('/index/praise',index.praise());
			_.get('/index/adv',index.advertisement());
		}))
	}
}
module.exports=controllerInit;