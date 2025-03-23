import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTours } from './asyncActions';

import { Tour, TourSliceState, Status } from './types';
 




const initialState: TourSliceState = {
  items: [],
  status: Status.LOADING, //loading | success | error
};

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Tour[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTours.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchTours.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchTours.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = tourSlice.actions;

export default tourSlice.reducer;
