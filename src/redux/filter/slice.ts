import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState } from './types';

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: null,
  checkIn:null,
  checkOut:null,
  childrenCount: 0,
  adultsCount: 0,
};


const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setCheckIn(state, action: PayloadAction<string>) {
      state.checkIn = action.payload;
    },
    setCheckOut(state, action: PayloadAction<string>) {
      state.checkOut = action.payload;
    },
    setChildrenCount(state, action: PayloadAction<number>) {
      state.childrenCount = action.payload;
    },
    setAdultsCount(state, action: PayloadAction<number>) {
      state.adultsCount = action.payload;
    },
  },
});

export const { 
  setSearchValue,
  setCategoryId,
  setCheckIn,
  setCheckOut,
  setChildrenCount,
  setAdultsCount
} = filterSlice.actions;

export default filterSlice.reducer;