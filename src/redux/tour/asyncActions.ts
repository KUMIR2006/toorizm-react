import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Tour, SearchTourParams } from './types';


export const fetchTours = createAsyncThunk<Tour[], SearchTourParams>('pizza/fetchToursStatus', async (params) => {
  const { adults, children, category, search} = params;
  const { data } = await axios.get<Tour[]>(
    `https://67ddc7a0471aaaa742828494.mockapi.io/items?${category}${children}${adults}${search}`,
  );

  return data;
});