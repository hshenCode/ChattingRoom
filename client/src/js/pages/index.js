/**
 * Created by hshen on 9/20/16.
 */

import $ from "jquery"
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'js/reducers'

import ChatContainer from 'js/containers/ChatContainer';


let store = createStore(reducer)

render(
    <Provider store={store}>
        <ChatContainer />
    </Provider>,
    $('.main')[0]
);