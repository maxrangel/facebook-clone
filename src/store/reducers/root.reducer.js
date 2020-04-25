import { combineReducers } from 'redux';
import postsReducer from './posts.reducer';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({ postsReducer, authReducer });

export default rootReducer;
