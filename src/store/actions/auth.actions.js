import axios from 'axios';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../action.types';

export const login = (email, password) => {
  return async dispatch => {
    dispatch({ type: LOGIN_START });

    try {
      const response = await axios.post('/api/v1/auth/login', {
        email,
        password
      });
      const user = response.data.data.user;
      dispatch({ type: LOGIN_SUCCESS, payload: { user } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: LOGIN_FAILURE, payload: { error } });
    }
  };
};

export const signup = (username, email, password, passwordConfirm) => {
  return async dispatch => {
    dispatch({ type: SIGNUP_START });

    try {
      await axios.post('/api/v1/auth/signup', {
        username,
        email,
        password,
        passwordConfirm
      });
      dispatch({ type: SIGNUP_SUCCESS });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: SIGNUP_FAILURE, payload: { error } });
    }
  };
};
