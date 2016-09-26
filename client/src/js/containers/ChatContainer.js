/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';

import * as actions from '../actions/actions';

import Chat from 'js/components/Chat';
import { connect } from 'react-redux';

var io = require('socket.io-client')
var socket = io.connect();


class ChatContainer extends Component {

    componentWillMount() {

    }

    render() {
        return (
            <Chat {...this.props} socket={socket} />
        );
    }
}

function mapStateToProps(state) {
    // state.messages = [{'user': 'user1',
    //                     'text': 'text1'}]
    console.log(state)
    return {
        messages: state.messages.messages
    }
}
export default connect(mapStateToProps)(ChatContainer)
