import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import localForage from 'localforage';

import postsReducer from './reducers/posts.reducer';
import authReducer from './reducers/auth.reducer';
import userReducer from './reducers/user.reducer';

// Only persist the user
const authPersistConfig = {
  key: 'authData',
  storage: localForage,
  stateReconcilier: autoMergeLevel2,
  whitelist: ['currentUser', 'isAuth']
};

const rootReducer = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer),
  postsReducer,
  userReducer
});

export default rootReducer;
