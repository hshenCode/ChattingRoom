/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import Chat from 'js/components/chat/Chat';
import * as actions from 'js/actions/actions';


class ChatContainer extends Component {
    render() {
        return (
            <Chat {...this.props} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        messages: state.messages.messages,
        userName: state.user.userName
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        receiveMessage: actions.receiveMessage,
        sendMessage: actions.sendMessage
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
