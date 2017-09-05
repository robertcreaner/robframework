(function() {
	'use strict';

	var Card = require('./card');
	var brain = require('./brain');
	var util = require('../util/service');
	var $ = require('jquery');

	var Burger = (function(_super) {

		util.extends(Burger, _super);

		function Burger(config) {
			return _super.call(this, config || {});
		}

		var p = Burger.prototype;

		p.initEle = function() {
            _super.prototype.initEle.call(this);

			this.ele.attr('id',this.id)
            .css({
                background: "url(../../img/menu-toggle.png)",
                backgroundSize: 'cover',
                left: 0,
                width: '170px',
                'z-index': 5
            });
		}

		p.initEvent = function() {

			this.ele.on('click', function(){
				brain.menuEnter(this);

				brain.maskEnter(this);
			});
		}

		return Burger;
	})(Card);

	module.exports = Burger;
})();
