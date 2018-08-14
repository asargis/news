import {USER_SIGNIN, USER_SIGNOUT} from "../constants/action-types";

const initialState = {
    username: 'unknown_user',
    isAuthorized: false,
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case USER_SIGNIN:
            return { ...state, username: action.payload.username, isAuthorized: true };
        case USER_SIGNOUT:
            return { ...state, username: 'unkonwn_user', isAuthorized: false };
        default:
            return state;
    }
}