import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosGetTree from './axiosGetTree';

const FETCH = 'React-Family-Tree/home/FETCH';
console.log("redux home");

const treeReducer = (state = '', action) => {
  console.log("treeReducer", action.type);
  switch (action.type) {
    case FETCH:
      return action.payload;
    default:
      return state;
  }
};

export const fetchTree = createAsyncThunk(
  FETCH,
  async (_, { dispatch }) => {
    const res = await axiosGetTree()
      .then(
        (data) => dispatch({
          type: FETCH,
          payload: data,
        }),
      );
      console.log("res", res);
    return res;
  },
);

export default treeReducer;
