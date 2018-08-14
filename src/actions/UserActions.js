export function userSignIn(username) {
    return {
        type: 'USER_SIGNIN',
        payload: {
            username: username,
            isAuthorized: true
        }
    }
}

export function userSignOut() {
    return {
        type: 'USER_SIGNOUT',
        payload: {
            username: 'unknown_user',
            isAuthorized: false
        }
    }
}