/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import MessageComposer from 'js/components/MessageComposer';
import MessageListItem from 'js/components/MessageListItem';
import * as actions from 'js/actions/actions';

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
        const { socket ,dispatch } = this.props;
        if (newMessage.text.length !== 0) {
            dispatch(actions.sendMessage(newMessage));
            socket.emit('newMessage', newMessage);
        }
    }

    render() {
        const { messages} = this.props;
        return (
            <div className="main">
                <ul style={{wordWrap: 'break-word', margin: '0', overflowY: 'auto', padding: '0', paddingBottom: '1em', flexGrow: '1', order: '1'}}>
                {messages.map(message =>
                    <MessageListItem message={message} key={message.text}/>
                )}
                </ul><MessageComposer sendMessage={this.sendMessage.bind(this)} />
            </div>
        );
    }
}
