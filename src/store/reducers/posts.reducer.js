import {
  ADD_POST_START,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
} from '../action.types';

const initialState = {
  posts: [],
  isLoading: false,
  error: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_START:
    case FETCH_POSTS_START:
      return { ...state, isLoading: true, error: null };

    case ADD_POST_FAILURE:
    case FETCH_POSTS_FAILED:
      const { error } = action.payload;
      return { ...state, isLoading: false, error };

    case ADD_POST_SUCCESS:
      const { newPost } = action.payload;
      const updatedPosts = state.posts.concat(newPost);

      return { ...state, posts: [...updatedPosts], isLoading: false };

    case FETCH_POSTS_SUCCESS:
      const { posts } = action.payload;
      return { ...state, isLoading: false, posts };
    default:
      return state;
  }
};

export default postsReducer;
