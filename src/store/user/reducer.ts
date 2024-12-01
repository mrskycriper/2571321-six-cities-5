import { createSlice } from '@reduxjs/toolkit';
import { UserLong } from '@/types/user';
import { setAuthorizationStatus, setUserData } from './actions';

type UserState = {
  authorizationStatus: boolean;
  userData: UserLong | null;
};

const initialState: UserState = {
  authorizationStatus: false,
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setAuthorizationStatus, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(setUserData, (state, action) => {
        state.userData = action.payload;
      });
  },
});

export const { reducer: userReducer } = userSlice;
