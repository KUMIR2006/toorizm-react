import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authType } from './types';

const initialState: authType = {
  authEmail: 'creaiser@mail.ru',
  authPassword: '1234',
  authName: 'Mirzobek',
  authSurname: 'Kurbanov',
  authStatus: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeEmail(state, action: PayloadAction<string>) {
      state.authEmail = action.payload;
    },
    changePassword(state, action: PayloadAction<string>) {
      state.authPassword = action.payload;
    },

    changeName(state, action: PayloadAction<string>) {
      state.authName = action.payload;
    },
    changeSurname(state, action: PayloadAction<string>) {
      state.authSurname = action.payload;
    },
    changeAuthStatus(state) {
      state.authStatus = !state.authStatus;
    },
  },
});

export const { changeName, changeSurname, changeEmail, changePassword, changeAuthStatus } =
  authSlice.actions;

export default authSlice.reducer;
