const path=require('path');
const CONFIG=new Map();
CONFIG.set('port',3009);
CONFIG.set('staticDir',path.join(__dirname,'../'));
CONFIG.set('viewDir',path.join(__dirname,'../','views'));

module.exports=CONFIG;