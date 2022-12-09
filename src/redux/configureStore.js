import { configureStore, combineReducers } from '@reduxjs/toolkit';
import treeReducer from './Home/Home';
import leafReducer from './Details/Details';

const rootReducer = combineReducers({
  treeReducer,
  leafReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
