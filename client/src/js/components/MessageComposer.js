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
        console.log(event.which);

        if (event.which === 13) {
            event.preventDefault();
            const text = event.target.value.trim();
            var newMessage = {
                text: text,
                user: '',
            };
            this.props.sendMessage(newMessage);
        }
    }

    render() {
        return (
            <div style={{
                    zIndex: '52',
                    left: '21.1rem',
                    right: '1rem',
                    width: '100%',
                    flexShrink: '0',
                    order: '2',
                    marginTop: '0.5em'
                  }}>
                <input
                    style={{
                        height: '100%',
                        fontSize: '2em',
                        marginBottom: '1em'
                      }}
                    type="textarea"
                    autoFocus="true"
                    placeholder="Type here to chat!"
                    onKeyDown={this.handleSubmit.bind(this)}
                />
            </div>
        );
    }
}
