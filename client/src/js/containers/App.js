/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

// Which props do we want to inject, given the global state
function data(state) {
    return {
        
    }
}

// Wrap component，inject dispatch and state to its default connect(select)(App)
export default connect(data)(App)