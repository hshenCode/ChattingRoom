/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import MessageComposer from 'js/components/MessageComposer';
import MessageListItem from 'js/components/MessageListItem';
import * as actions from 'js/actions/actions';

import 'css/chat.less'

export default class Chat extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const { socket, dispatch } = this.props;
        socket.on('newMessage',function (msg) {
            console.log(msg)
            dispatch(actions.receiveMessage(msg))
        });
    }

    sendMessage(newMessage) {
        const { socket ,dispatch, userName } = this.props;
        if (newMessage.length !== 0) {
            dispatch(actions.sendMessage(newMessage));
            socket.emit('newMessage', {userName: userName, text: newMessage});
        }
    }

    render() {
        const { messages} = this.props;
        return (
            <div className="chat">
                <div className="chat-area">
                    <ul className="messages">
                        {messages.map(message =>
                            <MessageListItem message={message} key={message.text}/>
                        )}
                    </ul>
                </div>
                <MessageComposer sendMessage={this.sendMessage.bind(this)} />
            </div>
        );
    }
}
