import React from 'react';
import ReactDOM from 'react-dom'; 
import TextArea from './text-area.jsx';

(function() {
    'use strict';

    var View = require('./view');
    var Header = require('./header');
    var Footer = require('./footer');
    var util = require('../util/service');
    var $ = require('jquery');

    var Card = (function(_super) {

        util.extends(Card, _super);

        function Card(config) {
            _super.call(this, config);

            this.hasHeader = this.config.hasHeader || false;
            this.hasFooter = this.config.hasFooter || false;
            this.headerEle = null;
            this.footerEle = null;
            this.mainEle = this.config.mainEle || null;
            this.width = this.config.width || '100%';
            this.height = this.config.height || '100%';
            this.id = this.config.id;
            this.className = this.config.className;
            this.position = this.config.position;

            return this;
        }

        var p = Card.prototype;

        /**
         * @param {}
         */
        p.initEle = function() {
            this.ele = $('<div>')
            .css({
                height: '100%',
                border: '1px solid #ccc',
                position: this.position || 'absolute',
                width: this.width || '100%',
                height: this.height || '100%'
            })

            if(this.id != null) {
                this.ele.attr('id', this.id);
            }

            _super.prototype.initEle.call(this);
        };

        /**
         * @param {}

         */
        p.initHeader = function(config) {
            if(this.hasHeader) {
                this.headerEle = new Header(config);
                this.ele.append(this.headerEle.ele);
            }
        };

        /**
         * @param {}
         */
        p.initFooter = function(config) {
            if(this.hasFooter){
                this.footerEle = new Footer(config);
                this.ele.append(this.footerEle.ele);
            }
        };

        /**
         * @param {}
         */
        p.hide = function() {
            this.ele.hide();
        }

        /**
         * @param {}
         */
        p.show = function() {
            this.ele.show();
        };

        p.getBodyHeight = function(headerHeight, footerHeight) {
            return 100 - (headerHeight + footerHeight);
        }

        p.getBodyPosition = function(bodyHeight) {
            return 100 - bodyHeight;
        }

        return Card;

    }(View));

    module.exports = Card;

})();


