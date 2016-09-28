/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import MessageComposer from 'js/components/chat/MessageComposer';
import MessageListItem from 'js/components/chat/MessageListItem';

import 'css/chat.less'

export default class Chat extends Component {

    constructor(props, context) {
        super(props, context);
        const io = require('socket.io-client')
        this.socket = io.connect();
    }

    componentDidMount() {
        const { receiveMessage } = this.props;
        this.socket.on('newMessage',function (msg) {
            receiveMessage(msg);
        });
    }

    sendMessage(newMessage) {
        const { sendMessage, userName } = this.props;
        if (newMessage.length !== 0) {
            sendMessage(newMessage);
            this.socket.emit('newMessage', {userName: userName, text: newMessage});
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
