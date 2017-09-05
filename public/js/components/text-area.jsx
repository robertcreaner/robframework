import React from 'react';
const $ = require('jquery');
const constants = require('../util/constant');

export default class TextArea extends React.Component {
    render() {
        return (
            <div id={this.props.id}>
                <h1>{this.props.title}</h1>
                <div>{this.props.mainBody}</div>
            </div>
        );
    }
}

