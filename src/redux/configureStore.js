import { configureStore } from '@reduxjs/toolkit';
import treeReducer from './Home/Home';

const store = configureStore({ reducer: treeReducer });

export default store;
