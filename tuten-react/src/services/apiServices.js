import api from './axiosConfig';

export const  login = async ({email, password, app})=>{
    api.defaults.headers['password'] = password;
    api.defaults.headers['app'] = app;
    const {data} = await api.put(email);
    const {sessionTokenBck} = data;
    return sessionTokenBck;
}

export const getData = async ({email, adminemail, current, tkn, app})=>{
    api.defaults.headers['adminemail'] = adminemail;
    api.defaults.headers['token'] = tkn;
    api.defaults.headers['app'] = app;
    const {data} = await api.get(`${email}/bookings?current=${current}`)
    return data
}