(function() {

	'use strict';

	var brain = {
		menuEnter : function() {
			PubSub.publish('menu-enter');
		},
		maskEnter : function() {
			PubSub.publish('mask-enter');
		}
	};

	module.exports = brain;
})();
