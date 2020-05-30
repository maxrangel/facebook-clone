import {
  ADD_POST_START,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  LIKE_POST_START,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  USER_PROFILE_START,
  USER_PROFILE_FAILURE,
  USER_PROFILE_SUCCESS
} from '../action.types';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  user: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_START:
    case FETCH_POSTS_START:
    case USER_PROFILE_START:
      return { ...state, isLoading: true, error: null };

    case ADD_POST_FAILURE:
    case FETCH_POSTS_FAILURE: // TODO
    case LIKE_POST_FAILURE:
    case USER_PROFILE_FAILURE:
      const { error } = action.payload;
      return { ...state, isLoading: false, error };

    case ADD_POST_SUCCESS:
      const { newPost } = action.payload;
      const updatedPosts = state.posts.concat(newPost);

      return { ...state, posts: [...updatedPosts], isLoading: false };

    case FETCH_POSTS_SUCCESS:
      const { posts } = action.payload;
      return { ...state, isLoading: false, posts };

    // Like post cases
    case LIKE_POST_START:
      return { ...state, error: null };

    case LIKE_POST_SUCCESS:
      const { post } = action.payload;
      const oldPostIndex = state.posts.findIndex(p => p.id === post.id);
      const oldPosts = [...state.posts];
      oldPosts[oldPostIndex] = { ...post };
      return { ...state, posts: [...oldPosts], error: null };
    
    case USER_PROFILE_SUCCESS:
      const { user, userPosts } = action.payload;
      return { ...state, posts: userPosts, user, isLoading: false };

    default:
      return state;
  }
};

export default postsReducer;
