'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rpA = require('request-promise');

var indexModel = function () {
	function indexModel(ctx) {
		_classCallCheck(this, indexModel);

		this.ctx = ctx;
	}

	_createClass(indexModel, [{
		key: 'updateNum',
		value: function updateNum() {
			var options = {
				uri: 'http://localhost/praise.php',
				method: 'GET'
			};
			return new Promise(function (resolve, reject) {
				rpA(options).then(function (result) {
					var info = JSON.parse(result);
					if (info) {
						resolve({ data: info.result });
					} else {
						reject({});
					}
				});
			});
		}
	}]);

	return indexModel;
}();

module.exports = indexModel;