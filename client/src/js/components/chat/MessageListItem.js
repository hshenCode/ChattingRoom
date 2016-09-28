import React, { PropTypes } from 'react';

export default class MessageListItem extends React.Component {
    render() {
        const { message } = this.props;
        return (
            <li className="message">
                <span className="user-name">{message.userName}</span>
                <span className="message-body">{message.text}</span>
            </li>
        );
    }
}
