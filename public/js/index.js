import TextArea from './components/text-area.jsx';

(function() {

	var $ = require('jquery');
	var Home = require('./components/home');
	var Menu = require('./components/menu');
	var Mask = require('./components/mask');
	var Burger = require('./components/burger');

	function engage() {
		//init app dependencies
		//fetch data
		//ondata
		createAppView();
	}


	function createAppView() {
		createHome();
		createMenu();
		createMask();
		createBurger();
	}

	function createHome() {
		var h = new Home({
			parent: $('.rob-dev'),
			id: 'rob-home',
			hasHeader: true
		}).init();
	}

	function createMenu() {
		var m = new Menu({
			parent: $('.rob-dev'),
			width: '75%',
			height:'90%',
			id: 'rob-menu'
		}).init();
	}

	function createMask() {
		var m = (new Mask({
			parent: $('.rob-dev'),
			id: 'rob-mask',
			height:'90%'
		})).init();
	}

	function createBurger() {
		var b = (new Burger({
			parent: $('#rob-header'),
			id: 'rob-burger',
			position: 'relative'
		})).init();
	}

	engage();

})();
