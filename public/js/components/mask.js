(function() {
	'use strict';

	var Card = require('./card');
	var brain = require('./brain');
	var util = require('../util/service');
	var $ = require('jquery');

	var Mask = (function(_super) {

		util.extends(Mask, _super);

		function Mask(config) {
			_super.call(this, config || {});
			this.state = 'hidden';
		}

		var p = Mask.prototype;

		p.initEle = function() {
            _super.prototype.initEle.call(this);

			this.ele.attr('id',this.id)
            .css({
            	display:'none',
                background: 'grey',
                opacity: '0.5',
                left: '0',
                bottom: '0'
            });
		}

		p.initEvent = function() {
			var me = this;
			PubSub.subscribe('mask-enter', function() {
				me.toggle();
			});
		}

		/**
		 * @param {}
		 */
		p.show = function() {
			this.state = 'shown';
			$(this.ele).css({
				'display':'block'
			});
		};

		/**
		 * @param {}
		 */
		p.hide = function() {
			this.state = 'hidden';
			$(this.ele).css({
				'display':'none'
			});
		};

		/**
		 * @param {}
		 */
		p.toggle = function() {
			var me = this;
			setTimeout(function() {
				me.state == 'hidden' ? me.show() : me.hide();
			}, 100);
		}

		return Mask;
	})(Card);

	module.exports = Mask;
})();
