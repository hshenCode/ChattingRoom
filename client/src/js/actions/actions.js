import * as types from 'js/constants/ActionTypes';

/*
 * action creator
 */
export function sendMessage(message) {
    return {
        type: types.SEND_MESSAGE,
        message
    }
}

export function receiveMessage(message) {
    return {
        type: types.RECEIVE_MESSAGE,
        message
    }
}

export function signIn(userName) {
    return {
        type: types.SIGN_IN,
        userName
    }
}
