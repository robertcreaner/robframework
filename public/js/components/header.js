(function() {
    'use strict';

    var $ = require('jquery');
    var constants = require('../util/constant');

    var Header = (function() {

        function Header(config) {
            this.height = config.height || '100%';
            this.className = config.className || null;
            this.ele = null;
            this.id = config.id;
            this.initEle();
        }

        var p = Header.prototype;

        /**
         * @param {}
         */
        p.initEle = function() {
            this.ele = $('<div>')
            .css({
                height: this.height || '10%',
                width: '100%',
                border: '1px solid #ccc',
                position: 'absolute'
            })
            .attr('id', this.id || 'header');
        };

        return Header;
    }());

    module.exports = Header;

})();


