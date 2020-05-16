import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import localForage from 'localforage';

import postsReducer from './posts.reducer';
import authReducer from './auth.reducer';

// Only persist the user
const authPersistConfig = {
  key: 'authData',
  storage: localForage,
  stateReconcilier: autoMergeLevel2,
  whitelist: ['currentUser', 'isAuth']
};

const rootReducer = combineReducers({
  postsReducer,
  authReducer: persistReducer(authPersistConfig, authReducer)
});

export default rootReducer;
