import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import tour from './tour/slice';
import cart from './cart/slice';
import navigation from './navigation/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    tour,
    cart,
    navigation,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
