'use strict';

var index = require('./indexController');
var controllerInit = {
    init: function init(app, router) {
        app.use(router(function (_) {
            _.get('/index/index', index.index());
            _.get('/index/update', index.update());
        }));
    }
};
module.exports = controllerInit;