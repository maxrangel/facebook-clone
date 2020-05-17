import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
} from '../action.types';
import axios from 'axios';

export const fetchAllPosts = () => {
  return async dispatch => {
    dispatch({ type: FETCH_POSTS_START });

    try {
      const response = await axios.get('/api/v1/posts');
      const posts = response.data.data.posts;

      dispatch({ type: FETCH_POSTS_SUCCESS, payload: { posts } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: FETCH_POSTS_FAILED, payload: { error } });
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

      const newPost = response.data.data.newPost;
      dispatch({ type: ADD_POST_SUCCESS, payload: { newPost } });
    } catch (err) {
      const error = err.response.data.message;
      dispatch({ type: ADD_POST_FAILURE, payload: { error } });
    }
  };
};
