import { createSlice } from '@reduxjs/toolkit';
import { UserLong } from '@/types/user';
import { setAuthorizationStatus, setUserData, setUserLoading } from './actions';

type UserState = {
  authorizationStatus: boolean;
  userData: UserLong | null;
  userLoading: boolean;
};

const initialState: UserState = {
  authorizationStatus: false,
  userData: null,
  userLoading: true,
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
      })
      .addCase(setUserLoading, (state, action) => {
        state.userLoading = action.payload;
      });
  },
});

export const { reducer: userReducer } = userSlice;
