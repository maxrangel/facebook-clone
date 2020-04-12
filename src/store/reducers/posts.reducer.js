import { ADD_POST } from '../action.types';
import * as moment from 'moment';

const initialState = {
  posts: [
    {
      id: 1,
      content: 'This is a test post for user with id 2',
      userId: 2,
      createdAt: moment().utc().format('Do MMMM YYYY, h:mm:ss a')
    }
  ]
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = action.payload;
      return { ...state, posts: [...state.posts, newPost] };
    default:
      return state;
  }
};

export default postsReducer;
