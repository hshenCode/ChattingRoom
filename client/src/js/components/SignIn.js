/**
 * Created by hshen on 9/27/16.
 */
/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import * as actions from 'js/actions/actions';
import {  browserHistory } from 'react-router';

import 'css/signIn.less'

export default class SignIn extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleSignIn(event) {
        if (event.which === 13) {
            const { dispatch } = this.props;
            event.preventDefault();
            const userName = event.target.value.trim();
            dispatch(actions.signIn(userName));
            browserHistory.push('/chat');
        }
    }

    render() {
        const { messages} = this.props;
        return (
            <div className="sign-in">
                <div className="form">
                    <h3 className="title">Who are you?</h3>
                    <input className="username-input" type="text"
                           onKeyDown={this.handleSignIn.bind(this)}
                           maxLength={10}
                           ref={function(input) {
                              if (input != null) {
                                input.focus();
                              }
                           }} />
                </div>
            </div>
        );
    }

}
