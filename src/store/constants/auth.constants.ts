
export enum AuthActions {
    LOGIN = "login",
    LOGOUT = "logout",
    REGISTER = "register",
    GET_CURR_USER = "getCurrUser"
}

export enum AuthMutations {
    LOGIN_SUCCESS = 'loginSuccess',
    LOGIN_FAILURE = 'loginFailure',
    LOGOUT = 'logout',
    REGISTER_SUCCESS = 'registerSuccess',
    REGISTER_FAILURE = 'registerFailure',
    GET_CURR_USER = "getCurrUser",
    GET_CURR_USER_FALLBACK = "getCurrUserFallback"
}

export enum AuthGetters {
    IS_LOGGED_IN = "isLoggedIn",
    LOGIN_ERROR = "loginError",
    CURRENT_USER = "currentUser"
}