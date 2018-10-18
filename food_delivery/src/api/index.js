import axios from 'axios';
import apiConfig from '../config/api' 

export const login = (loginInfo, cb) => {
    axios.post(apiConfig.login, loginInfo).then(cb);
}

