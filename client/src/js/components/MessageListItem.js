import React, { PropTypes } from 'react';

export default class MessageListItem extends React.Component {
    render() {
        const { message } = this.props;
        return (
            <li>
                <span>
                  <b style={{color: '#66c'}}><button style={{background: 'Transparent',backgroundRepeat: 'noRepeat', border: 'none', cursor: 'pointer', overflow: 'hidden', outline: 'none'}}>{message.user}</button></b>
                </span>
                <div style={{clear: 'both', paddingTop: '0.1em', marginTop: '-1px', paddingBottom: '0.3em'}}>{message.text}</div>
            </li>
        );
    }
}
