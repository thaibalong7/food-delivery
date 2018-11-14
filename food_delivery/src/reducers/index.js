import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import authenticationReducer from './authenticationReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

const authenticationConfig = {
    key: 'authentiation',
    storage,
    blacklist: ['isAuthenticating', 'errNote']
}

export default combineReducers({
    basketReducer: basketReducer,
    authenticationReducer: persistReducer(authenticationConfig, authenticationReducer),
});
