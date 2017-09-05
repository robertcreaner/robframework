import React from 'react';
import ReactDOM from 'react-dom';

(function() {
    'use strict';

    var View = (function() {

        function View(config) {
            this.config = config || {};
            this.data = this.config.data;
            this.parent = this.config.parent || null;
        }

        var p = View.prototype;

        /**
         * @param {}
         */
        p.init = function() {
        	this.initEle();
        	this.initEvent();
        };

        /**
         * @param {}
         */
        p.initEle = function() {
        	if(this.parent && this.ele) {
        		this.parent.append(this.ele);
        	}
        };

        /**
         * @param {}
         */
        p.initReactEle = function() {
            if(this.ele && this.reactEle) {
                this.ele.append(this.reactEle);
            }
        }

        /**
         * @param {}
         */
        p.initEvent = function() {
            // this.ele.on('click', this.onClick.bind(this));
        };

        /**
         * @param {}
         */
        p.setData = function(data) {
        	this.data = data;
        	this.udpateData(data);
        };

        /**
         * @param {}
         */
        p.udpateData = function(newData) {
        	this.refresh();
        };

        /**
         * @param {}
         */
        p.refresh = function() {
        	console.log('');
        };

        return View;

    }());

    module.exports = View;

})();


