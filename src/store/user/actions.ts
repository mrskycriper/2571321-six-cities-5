import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTES } from '@/api';
import { AuthInfo, UserLong } from '@/types/user';
import { AsyncThunkConfig } from '@/store/types';
import { clearToken, setToken } from '@/utils/user';

export const userActions = {
  SET_AUTHORIZATION_STATUS: 'authorizationStatus/set',
  SET_USER_DATA: 'userData/set',
  VALIDATE_USER: 'user/validate',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
};

export const setAuthorizationStatus = createAction<boolean>(
  userActions.SET_AUTHORIZATION_STATUS
);

export const setUserData = createAction<UserLong | null>(
  userActions.SET_USER_DATA
);

export const validateUser = createAsyncThunk<void, void, AsyncThunkConfig>(
  userActions.VALIDATE_USER,
  async (_, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.get<UserLong>(
        API_ROUTES.USER.VALIDATE
      );
      thunkApi.dispatch(setAuthorizationStatus(true));
      thunkApi.dispatch(setUserData(response.data));
    } catch (error) {
      clearToken();
      thunkApi.dispatch(setAuthorizationStatus(false));
      thunkApi.dispatch(setUserData(null));
    }
  }
);

export const login = createAsyncThunk<void, AuthInfo, AsyncThunkConfig>(
  userActions.LOGIN,
  async (credentials, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.post<UserLong>(
        API_ROUTES.USER.LOGIN,
        { ...credentials }
      );
      setToken(response.data.token);
      thunkApi.dispatch(setAuthorizationStatus(true));
      thunkApi.dispatch(setUserData(response.data));
    } catch (error) {
      thunkApi.dispatch(setAuthorizationStatus(false));
      thunkApi.dispatch(setUserData(null));
    }
  }
);

export const logout = createAsyncThunk<void, void, AsyncThunkConfig>(
  userActions.LOGOUT,
  async (_, thunkApi) => {
    await thunkApi.extra.api.delete(API_ROUTES.USER.LOGOUT);
    clearToken();
    thunkApi.dispatch(setAuthorizationStatus(false));
    thunkApi.dispatch(setUserData(null));
  }
);
