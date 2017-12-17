var DevWebpack=require('./config/webpack.dev');
var ProWebpack=require('./config/webpack.prod');
console.log('-------',process.env.NODE_ENV);
switch (process.env.NODE_ENV){
	case 'dev':
		module.exports=DevWebpack;
		break;
	case 'prod':
		module.exports=ProWebpack;
		break;
	case 'default':
		module.exports=DevWebpack;
		break;
}
