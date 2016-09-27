/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import SignIn from 'js/components/SignIn';
import { connect } from 'react-redux';

class SignInContainer extends Component {

    render() {
        return (
            <SignIn {...this.props} />
        );
    }
}

function injectProps(state) {
    return {

    }
}

export default connect(injectProps)(SignInContainer)
