import * as moment from 'moment';
import {
  ADD_POST,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED
} from '../action.types';
import Post from '../../models/post.model';
import axios from 'axios';

export const fetchAllPosts = () => {
  return async dispatch => {
    dispatch({ type: FETCH_POSTS });

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

export const addPost = postDesc => {
  const newPost = new Post(
    Math.ceil(Math.random() * 100),
    postDesc,
    1,
    moment().utc().format('Do MMMM YYYY, h:mm:ss a')
  );

  return { type: ADD_POST, payload: newPost };
};
