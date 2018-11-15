import { ADD_FOOD, DELETE_FOOD } from './types'
import { //Authentication
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    SIGN_OUT
} from './types'
import { //Merchant
    CHANGE_VIEW
} from './types'
import apiConfig from './../config/api'
import axios from 'axios';

export const add_food = ({ id }) => {
    return {
        type: ADD_FOOD,
        payload: id
    }
}
export const delete_food = ({ id }) => {
    return {
        type: DELETE_FOOD,
        payload: id
    }
}

export const authenticate = (data) => (dispatch) => {
    dispatch({
        type: AUTHENTICATION_REQUEST,
    })
    console.log('authenticate',apiConfig.login,data)
    axios.post(apiConfig.login, data).then(response => {
        console.log('Login response: ', response);
        dispatch({
            type: AUTHENTICATION_SUCCESS,
            message: response,
        })
    }).catch((e) => {
        console.log('Login failed: ', e.response.data.msg);
        dispatch({
            type: AUTHENTICATION_FAILURE,
            message: e.response,
        })
    })
}

export const signOut = () => (dispatch) => {
    dispatch({
        type: SIGN_OUT,
    });
}

export const ChangeViewMerchant = () => (dispatch) => {
    dispatch({
        type: CHANGE_VIEW,
    });
}