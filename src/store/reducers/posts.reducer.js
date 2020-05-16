import {
  ADD_POST,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED
} from '../action.types';

const initialState = {
  posts: [],
  isLoading: false,
  error: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, isLoading: true };
    case FETCH_POSTS_SUCCESS:
      const { posts } = action.payload;
      return { ...state, isLoading: false, posts };
    case FETCH_POSTS_FAILED:
      return { ...state, isLoading: false, error: action.payload.error };
    case ADD_POST:
      const newPost = action.payload;
      return { ...state, posts: [...state.posts, newPost] };
    default:
      return state;
  }
};

export default postsReducer;
