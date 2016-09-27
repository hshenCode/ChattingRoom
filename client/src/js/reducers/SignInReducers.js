/**
 * Created by hshen on 9/24/16.
 */

import React from 'react'
import * as types from 'js/constants/ActionTypes'

const initialState = {
    userName: ''
};

export default function signIn(state = initialState, action) {
    switch (action.type) {
        case types.SIGN_IN:
            return {...state,
                    userName: action.userName
            }
        default:
            return state;
    }
}
