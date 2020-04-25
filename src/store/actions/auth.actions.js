import { LOGIN, LOGOUT, SIGNUP } from '../action.types';
import User from '../../models/user.model';

export const login = (user, password) => {
  return { type: LOGIN, payload: { user, password } };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const signup = (username, email, password) => {
  const newUser = new User(
    Math.round(Math.random() * 100),
    username,
    email,
    password,
    []
  );
  
  return { type: SIGNUP, payload: newUser };
};
