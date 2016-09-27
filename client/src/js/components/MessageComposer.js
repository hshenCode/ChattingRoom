/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import  { Input }  from 'react-bootstrap';

export default class MessageComposer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleSubmit(event) {
        if (event.which === 13) {
            event.preventDefault();
            const text = event.target.value.trim();
            this.props.sendMessage(text);
        }
    }

    render() {
        return (
            <input className="input-message" placeholder="Type here..." autoFocus="true" onKeyDown={this.handleSubmit.bind(this)}/>
        );
    }
}
