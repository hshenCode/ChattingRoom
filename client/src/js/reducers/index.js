/**
 * Created by hshen on 9/24/16.
 */

import { combineReducers } from 'redux'
import messages from 'js/reducers/MessageReducer'

const reducer = combineReducers({
    messages
})

export default reducer
