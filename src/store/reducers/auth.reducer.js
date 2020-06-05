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
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
      return { ...state, isLoading: true, error: null };
    case LOGIN_SUCCESS:
      const { user, token } = action.payload;
      return {
        ...state,
        isLoading: false,
        currentUser: user,
        isAuth: true,
        token
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false
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
