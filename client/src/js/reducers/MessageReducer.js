/**
 * Created by hshen on 9/24/16.
 */

import React from 'react'
import * as types from 'js/constants/ActionTypes'

const initialState = {
    messages: [{'user': 'user1',
                'text': 'text1'}]
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_MESSAGE:
            return {...state,
                messages: [...state.messages, action.message]
            }
        case types.SEND_MESSAGE:
            return state;
        default:
            return state;
    }
}
