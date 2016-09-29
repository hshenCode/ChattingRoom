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

export function userJoined(data) {
    return {
        type: types.USER_JOINED,
        data
    }
}

export function userLeft(data) {
    return {
        type: types.USER_LEFT,
        data
    }
}