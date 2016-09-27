/**
 * Created by hshen on 9/24/16.
 */

import { combineReducers } from 'redux'
import messages from 'js/reducers/MessageReducer'
import signIn from 'js/reducers/SignInReducers'

const reducer = combineReducers({
    messages,
    user: signIn
})

export default reducer
