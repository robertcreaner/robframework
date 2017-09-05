(function() {
	'use strict';

	var Card = require('./card');
	var brain = require('./brain');
	var util = require('../util/service');
	var constants = require('../util/constant');
	var $ = require('jquery');

	var Menu = (function(_super) {

		util.extends(Menu, _super);

		function Menu(config) {
			_super.call(this, config || {});

			this.headerEle = null;
			this.footerEle = null;
			this.mainEle = null;
			this.hasHeader = this.config.hasHeader;
			this.hasFooter = this.config.hasFooter;
			this.state = 'closed';
		}

		var p = Menu.prototype;

		p.initEle = function() {
            _super.prototype.initEle.call(this);

			this.ele.attr('id',this.id)
            .css({
                background: constants.primaryColor,
                left: '-100%',
                bottom: '0',
                transition: 'left 0.5s',
                'z-index': '5'
            });
		}

		p.initEvent = function() {
			var me = this;
			PubSub.subscribe('menu-enter', function() {
				me.toggle();
			});
		}

		/**
		 * @param {}
		 */
		p.enter = function() {
			this.state = 'open';
			$(this.ele).css({
				'left':'0'
			});
		};

		/**
		 * @param {}
		 */
		p.leave = function() {
			this.state = 'closed';
			$(this.ele).css({
				'left':'-100%'
			});
		};

		/**
		 * @param {}
		 */
		p.toggle = function() {
			this.state == 'closed' ? this.enter() : this.leave();
		}

		return Menu;
	})(Card);

	module.exports = Menu;
})();
