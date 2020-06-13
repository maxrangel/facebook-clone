import * as actionTypes from '../action.types';
import axios from 'axios';

export const fetchAllPosts = token => {
  return async dispatch => {
    dispatch({ type: actionTypes.FETCH_POSTS_START });

    try {
      const response = await axios.get('/api/v1/posts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { posts } = response.data.data;

      dispatch({ type: actionTypes.FETCH_POSTS_SUCCESS, payload: { posts } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: actionTypes.FETCH_POSTS_FAILURE, payload: { error } });
    }
  };
};

export const addPost = (postContent, userId, token) => {
  return async dispatch => {
    dispatch({ type: actionTypes.ADD_POST_START });

    try {
      const post = { content: postContent, userId };

      const response = await axios.post('/api/v1/posts', post, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      const { newPost } = response.data.data;
      dispatch({ type: actionTypes.ADD_POST_SUCCESS, payload: { newPost } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: actionTypes.ADD_POST_FAILURE, payload: { error } });
    }
  };
};

export const likePost = (postId, userId, token) => {
  return async dispatch => {
    dispatch({ type: actionTypes.LIKE_POST_START });

    try {
      const response = await axios.get(
        `/api/v1/posts/like/${postId}/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // Updated post, either with like or dislike
      const { post } = response.data.data;
      dispatch({ type: actionTypes.LIKE_POST_SUCCESS, payload: { post } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: actionTypes.LIKE_POST_FAILURE, payload: { error } });
    }
  };
};

export const fetchUserProfile = (userId, token) => {
  return async dispatch => {
    dispatch({ type: actionTypes.USER_PROFILE_START });

    try {
      const response = await axios.get(`/api/v1/users/profile/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const { user, userPosts } = response.data.data;

      dispatch({
        type: actionTypes.USER_PROFILE_SUCCESS,
        payload: { user, userPosts }
      });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: actionTypes.USER_PROFILE_FAILURE, payload: { error } });
    }
  };
};
