import Axios from 'axios';

const APP_URL = 'https://dev.tuten.cl:443/TutenREST/rest/user/';

const api = Axios.create({
    baseURL: APP_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;