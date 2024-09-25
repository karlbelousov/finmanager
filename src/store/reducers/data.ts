import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Data } from '../../type/data';

export type viewTypeMainState = {
  data: Data[];
};

const initialState: viewTypeMainState = {
  data: [],
};

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Data>) => {
      state.data.push(action.payload);
    },
  },
});

export const {setData} = dataSlice.actions;
export default dataSlice.reducer;
