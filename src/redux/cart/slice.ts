import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartSliceState } from './types';

const initialState: CartSliceState = {
  cartTours: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.cartTours.push({
        ...action.payload,
      });
    },
    removeItem(state, action: PayloadAction<number>) {
      state.cartTours = state.cartTours.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.cartTours = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
