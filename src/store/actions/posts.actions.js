import * as moment from 'moment';
import { ADD_POST } from '../action.types';
import Post from '../../models/post.model';

export const addPost = postDesc => {
  const newPost = new Post(
    Math.ceil(Math.random() * 100),
    postDesc,
    1,
    moment().utc().format('Do MMMM YYYY, h:mm:ss a')
  );

  return { type: ADD_POST, payload: newPost };
};
