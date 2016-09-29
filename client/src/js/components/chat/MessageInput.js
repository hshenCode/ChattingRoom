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
            const text = this.refs.input.value.trim();
            if (text.length > 0) {
                this.props.sendMessage(text);
                this.refs.input.value = '';
            }
        }
    }

    render() {
        return (
            <input className="input-message"
                   placeholder="Type here..."
                   autoFocus="true"
                   ref="input"
                   onKeyDown={this.handleSubmit.bind(this)}/>
        );
    }
}
