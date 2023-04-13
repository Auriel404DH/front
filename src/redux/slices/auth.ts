import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ISignUpHash } from '../../models/api';

export interface AuthState {
  user: ISignUpHash;
  isAuth: boolean;
}

const initialState: AuthState = {
  user: {
    fullName: '',
    email: '',
    avatarUrl: '',
    token: '',
    _id: '',
  },
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<ISignUpHash>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    loginUser: (state, action: PayloadAction<ISignUpHash>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export const { addUser, loginUser } = authSlice.actions;

export default authSlice.reducer;
