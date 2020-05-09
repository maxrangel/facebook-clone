import {
  LOGOUT,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS
} from '../action.types';

const initialState = {
  currentUser: null,
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
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload.user,
        isAuth: true
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    case LOGOUT:
      return { ...state, isAuth: false };

    default:
      return state;
  }
};

export default authReducer;
