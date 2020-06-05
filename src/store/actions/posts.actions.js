import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  LIKE_POST_START,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  USER_PROFILE_START,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE
} from '../action.types';
import axios from 'axios';

export const fetchAllPosts = () => {
  return async dispatch => {
    dispatch({ type: FETCH_POSTS_START });

    try {
      const response = await axios.get('/api/v1/posts');
      const { posts } = response.data.data;

      dispatch({ type: FETCH_POSTS_SUCCESS, payload: { posts } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: FETCH_POSTS_FAILURE, payload: { error } });
    }
  };
};

export const addPost = (postContent, userId) => {
  return async dispatch => {
    dispatch({ type: ADD_POST_START });

    try {
      const post = { content: postContent, userId };

      const response = await axios.post('/api/v1/posts', post, {
        headers: { 'Content-Type': 'application/json' }
      });

      const { newPost } = response.data.data;
      dispatch({ type: ADD_POST_SUCCESS, payload: { newPost } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: ADD_POST_FAILURE, payload: { error } });
    }
  };
};

export const likePost = (postId, userId) => {
  return async dispatch => {
    dispatch({ type: LIKE_POST_START });

    try {
      const response = await axios.get(
        `/api/v1/posts/like/${postId}/${userId}`
      );

      // Updated post, either with like or dislike
      const { post } = response.data.data;
      dispatch({ type: LIKE_POST_SUCCESS, payload: { post } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: LIKE_POST_FAILURE, payload: { error } });
    }
  };
};

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
