import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavigationSliceState } from './types';

const initialState: NavigationSliceState = {
  navigationId: 0,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavId(state, action: PayloadAction<number>) {
      state.navigationId = action.payload;
    },
  },
});

export const { setNavId } = navigationSlice.actions;

export default navigationSlice.reducer;
