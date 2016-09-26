/**
 * Created by hshen on 9/24/16.
 */

import React from 'react'
import App from 'js/containers/App';
import ChatContainer from 'js/containers/ChatContainer';

import { Redirect, Router, Route, IndexRoute } from 'react-router';


const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={ChatContainer} />
        <Route path="/chat" component={ChatContainer}>
        </Route>
    </Route>
);

export default Routes;
