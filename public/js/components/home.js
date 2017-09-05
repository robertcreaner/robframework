import React from 'react';
import ReactDOM from 'react-dom'; 
import TextArea from './text-area.jsx';

(function() {
    'use strict';

    var Card = require('./card');
    var util = require('../util/service');
    var constants = require('../util/constant');
    var $ = require('jquery');

    var Home = (function(_super) {

        util.extends(Home, _super);

        function Home(config) {
            this.reactId = 'react--home';
            return _super.call(this, config);
        }

        var p = Home.prototype;

        /**
         * @param {}
         */
        p.initEle = function() {
            const me = this;
            me.ele = $('<div>')
            .css({
                height: '100%',
                border: '1px solid #ccc',
                position: me.position || 'absolute',
                width: me.width || '100%'
            })
            .attr('id', me.id);
            _super.prototype.initEle.call(me);
            _super.prototype.initHeader.call(me, constants.homeHeaderConfig);

            me.reactEle = $('<div>')
            .attr('id', me.reactId);
            _super.prototype.initReactEle.call(me);

            class HomePage extends React.Component{
                render() {
                    return (
                        <div>
                            <TextArea title='My App' mainBody='Welcome to my app' />                            
                        </div>
                    )
                }
            }

            ReactDOM.render(
                <HomePage />,
                $('#' + me.reactId)[0]
            );
        };

        return Home;

    }(Card));

    module.exports = Home;

})();


