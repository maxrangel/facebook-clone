import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGOUT
} from '../action.types';

const initialState = {
  currentUser: null,
  token: null,
  isAuth: false,
  isLoading: false,
  error: null,
  success: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
      return { ...state, isLoading: true, error: null, success: null };

    case LOGIN_SUCCESS:
      const { user, token } = action.payload;
      return {
        ...state,
        isLoading: false,
        currentUser: user,
        isAuth: true,
        token,
        success: 'Login successful!'
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: 'Account created!'
      };

    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        token: null
      };

    case LOGOUT:
      return { ...state, isAuth: false, currentUser: null, token: null };
    default:
      return state;
  }
};

export default authReducer;
