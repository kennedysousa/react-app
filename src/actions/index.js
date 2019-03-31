import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3000/signup', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'This e-mail is already in use.'});
    }   
};

export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    };
};

export const signin = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3000/signin', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials.'});
    }   
};

