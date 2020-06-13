import axios from 'axios';
import * as actionTypes from '../action.types';

export const login = (email, password) => {
  return async dispatch => {
    dispatch({ type: actionTypes.LOGIN_START });

    try {
      const response = await axios.post('/api/v1/auth/login', {
        email,
        password
      });
      const {
        token,
        data: { user }
      } = response.data;

      console.log(response.data);

      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: { user, token } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: actionTypes.LOGIN_FAILURE, payload: { error } });
    }
  };
};

export const signup = (username, email, password, passwordConfirm) => {
  return async dispatch => {
    dispatch({ type: actionTypes.SIGNUP_START });

    try {
      await axios.post('/api/v1/auth/signup', {
        username,
        email,
        password,
        passwordConfirm
      });
      dispatch({ type: actionTypes.SIGNUP_SUCCESS });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: actionTypes.SIGNUP_FAILURE, payload: { error } });
    }
  };
};

export const logout = () => ({ type: actionTypes.LOGOUT });
