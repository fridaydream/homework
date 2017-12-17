webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var f = new _index.Thumb();
xtag.register('x-praise', {
    content: '<div class="hand" id="hand">' + '<div class="finger"></div>' + '<div class="thumb" id="thumb"></div>' + '</div>' + '<div id="animation" class="animation">+1</div>',
    methods: {
        praise: function praise() {
            var _this = this;
            f.clickAction();
            var animation = _this.querySelector("#animation");
            animation.className = "num";
            setTimeout(function () {
                animation.className = "";
            }, 1000);
        }
    },
    events: {
        click: function click(e) {
            var _this = this;
            if (e.target.id == "hand") {
                if (t) {
                    clearTimeout(t);
                }
                var t = setTimeout(function () {
                    _this.praise();
                }, 500);
            }
        }
    }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var f = new _index.Star();
xtag.register('x-star', {
    content: '<div class="star" id="star">' + '<div class="star1"></div>' + '五角星' + '</div>' + '<div id="animation" class="animation">+1</div>',
    methods: {
        praise: function praise() {
            var _this = this;
            f.clickAction();
            var animation = _this.querySelector("#animation");
            animation.className = "num";
            setTimeout(function () {
                animation.className = "";
            }, 1000);
        }
    },
    events: {
        click: function click(e) {
            var _this = this;
            if (e.target.id == "star") {
                if (t) {
                    clearTimeout(t);
                }
                var t = setTimeout(function () {
                    _this.praise();
                }, 500);
            }
        }
    }
});

/***/ })
],[4]);