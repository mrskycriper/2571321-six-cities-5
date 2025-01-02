import { createSlice } from '@reduxjs/toolkit';
import { UserLong } from '@/types/user';
import { setAuthorizationStatus, setUserData, setUserLoading } from './actions';

type UserDataState = {
  authorizationStatus: boolean;
  userData: UserLong | null;
  userLoading: boolean;
};

const initialState: UserDataState = {
  authorizationStatus: false,
  userData: null,
  userLoading: true,
};

const userDataSlice = createSlice({
  name: 'userData',
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

export const { reducer: userDataReducer } = userDataSlice;
