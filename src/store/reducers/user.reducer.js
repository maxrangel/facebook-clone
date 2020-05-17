import {
  USER_PROFILE_START,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE
} from '../action.types';

const initialState = {
  user: null,
  posts: [],
  isLoading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_START:
      return { ...state, isLoading: true, error: null };

    case USER_PROFILE_FAILURE:
      const { error } = action.payload;
      return { ...state, isLoading: false, error };

    case USER_PROFILE_SUCCESS:
      const { user, userPosts } = action.payload;
      return { ...state, posts: userPosts, user, isLoading: false };

    default:
      return state;
  }
};

export default userReducer;
