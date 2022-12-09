import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosGetLeaf from './axiosGetLeaf';

const FETCH = 'React-Family-Tree/details/FETCH';

const leafReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    default:
      return state;
  }
};

export const fetchLeaf = createAsyncThunk(
  FETCH,
  async (id, { dispatch }) => {
    const res = await axiosGetLeaf(id)
      .then(
        (data) => dispatch({
          type: FETCH,
          payload: data,
        }),
      );
    return res;
  },
);

export default leafReducer;
