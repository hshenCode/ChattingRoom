/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Chat from 'js/components/Chat';

class ChatContainer extends Component {
    render() {
        return (
            <Chat {...this.props} />
        );
    }
}

function injectProps(state) {
    var io = require('socket.io-client')
    var socket = io.connect();
    return {
        socket: socket,
        messages: state.messages.messages,
        userName: state.user.userName
    }
}

export default connect(injectProps)(ChatContainer)
