import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    AUTHENTICATION_REQUEST,
    SIGN_OUT,
} from './../actions/types';

const initialState = {
    isAuthenticating: false,
    isAuthenticated: false,
    userInfo: null,
    accessToken: null,
    errNote: ''
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION_SUCCESS:
            {
                return {
                    ...state,
                    isAuthenticating: false,
                    isAuthenticated: true,
                    accessToken: action.message.data.token,
                    errNote: ''
                };
            }
        case AUTHENTICATION_REQUEST:
            {
                return {
                    ...state,
                    isAuthenticating: true,
                    isAuthenticated: false,
                    accessToken: null,
                    errNote: ''
                };
            }
        case AUTHENTICATION_FAILURE:
            {
                return {
                    ...state,
                    isAuthenticated: false,
                    isAuthenticating: false,
                    userInfo: null,
                    accessToken: null,
                    errNote: action.message.data.msg
                };
            }
        case SIGN_OUT:
            {
                return { ...state };
            }
        default:
            return state;
    }
}

export default authenticationReducer;