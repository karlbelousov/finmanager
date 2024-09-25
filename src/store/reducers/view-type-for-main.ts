import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type viewTypeMainState = {
  viewType: string;
  value: string;
  comment: string;
};

const initialState: viewTypeMainState = {
  viewType: 'доход',
  value: '',
  comment: ''
};

export const viewTypeMainSlice = createSlice({
  name: 'viewTypeMain',
  initialState,
  reducers: {
    changeViewType: (state, action: PayloadAction<string>) => {
      state.viewType = action.payload;
    },
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    changeComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
});

export const {changeViewType, changeComment, changeValue} = viewTypeMainSlice.actions;
export default viewTypeMainSlice.reducer;
