webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var f = new _index2.default();
xtag.register('x-praise', {
    content: '<div class="box-warp">' + '<div>' + '</div>' + '<div class="fingerAll">' + ' <div class="fingerTwo">' + '<div class="fingerBig" id="fingerBig">' + '</div>' + '</div>' + '<div class="fingerThree"></div>' + '<div class="fingerFour"></div>' + '<div class="fingerFive"></div>' + '</div>' + '</div>',
    methods: {
        praise: function praise() {
            f.clickAction();
        }
    },
    events: {
        click: function click(e) {
            var _this = this;
            _this.num = 0;
            if (e.target.id == "fingerBig") {
                if (t) {
                    clearTimeout(t);
                }
                t = setTimeout(function () {
                    _this.num++;
                    console.log(_this.num);
                    _this.praise();
                }, 800);
            }
        }
    }
});

/***/ })

},[4]);