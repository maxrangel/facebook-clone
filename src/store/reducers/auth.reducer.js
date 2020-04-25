import { LOGIN, LOGOUT } from '../action.types';

const initialState = {
  currentUser: null,
  isAuth: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true };

    case LOGOUT:
      return { ...state, isAuth: false };

    default:
      return state;
  }
};

export default authReducer;
