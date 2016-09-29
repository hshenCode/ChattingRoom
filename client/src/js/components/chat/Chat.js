/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import MessageInput from 'js/components/chat/MessageInput';
import MessageItem from 'js/components/chat/MessageItem';
import Singleton from 'js/socket'

import 'css/chat.less'

export default class Chat extends Component {

    constructor(props, context) {
        super(props, context);
        this.socket = Singleton.getInstance();
    }

    componentWillMount() {
        const { receiveMessage, userJoined, userLeft } = this.props;
        this.socket.on('newMessage',function (msg) {
            receiveMessage(msg);
        });
        this.socket.on('userJoined',function (data) {
            console.log(data);
            userJoined(data);
        });
        this.socket.on('userLeft',function (data) {
            console.log(data);
            userLeft(data);
        });
    }

    sendMessage(newMessage) {
        const { sendMessage, userName } = this.props;
        if (newMessage.length !== 0) {
            sendMessage(newMessage);
            this.socket.emit('newMessage', newMessage);
        }
    }

    render() {
        const { messages} = this.props;
        return (
            <div className="chat">
                <div className="chat-area">
                    <ul className="messages">
                        {messages.map( (message, index) =>
                            <MessageItem message={message} key={index}/>
                        )}
                    </ul>
                </div>
                <MessageInput sendMessage={this.sendMessage.bind(this)} />
            </div>
        );
    }
}
