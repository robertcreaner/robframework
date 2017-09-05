(function() {
    'use strict';

    var View = require('./view');
    var util = require('../util/service');
    var $ = require('jquery');

    var Footer = (function(_super) {

        util.extends(Footer, _super);

        function Footer(config) {
            _super.call(this, config);

            this.height = this.config.height || '100%';
            this.className = this.config.className || null;
            this.ele = null;

            this.initEle();
        }

        var p = Footer.prototype;

        /**
         * @param {}
         */
        p.initEle = function() {
            this.ele = $('<div>')
            .css({
                height: this.height || '10%',
                border: '1px solid #ccc',
                position: 'absolute',
                width: this.width || '100%',
                background: 'yellow'
            })
            .attr('id', 'rob-Footer');
        };

        /**
         * @param {}
         */
        p.initEvent = function() {

        };

        return Footer;

    }(View));

    module.exports = Footer;

})();
