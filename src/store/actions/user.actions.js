import axios from 'axios';
import {
  USER_PROFILE_START,
  USER_PROFILE_FAILURE,
  USER_PROFILE_SUCCESS
} from '../action.types';

export const fetchUserProfile = userId => {
  return async dispatch => {
    dispatch({ type: USER_PROFILE_START });
    
    try {
      const response = await axios.get(`/api/v1/users/profile/${userId}`);
      const { user, userPosts } = response.data.data;

      dispatch({ type: USER_PROFILE_SUCCESS, payload: { user, userPosts } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: USER_PROFILE_FAILURE, payload: { error } });
    }
  };
};
