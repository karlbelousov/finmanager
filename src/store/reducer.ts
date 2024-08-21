import { createReducer } from '@reduxjs/toolkit';
import { Data } from '../type/data';
import { setStat } from './action';

type State = {
  data: Data[];
}

const initialState: State = {
  data: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setStat, (state, action) => {
      state.data.push(action.payload);
    });
});
