import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTES, APIErrorResponse, errorHandler } from '@/api';
import { AsyncThunkConfig } from '@/store/types';
import { AuthInfo, UserLong } from '@/types/user';
import { clearToken, setToken } from '@/utils/user';
import { OfferShort } from '@/types/offer';

export const userDataActions = {
  SET_AUTHORIZATION_STATUS: 'authorizationStatus/set',
  SET_USER_DATA: 'userData/set',
  SET_USER_LOADING: 'userLoading/set',
  SET_FAVORITE_OFFERS: 'favoriteOffers/set',
  SET_FAVORITE_OFFERS_ERROR: 'favoriteOffersError/set',
  VALIDATE_USER: 'user/validate',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  ADD_FAVORITE_OFFER: 'favoriteOffers/add',
  REMOVE_FAVORITE_OFFER: 'favoriteOffers/remove',
};

export const setAuthorizationStatus = createAction<boolean>(
  userDataActions.SET_AUTHORIZATION_STATUS
);

export const setUserData = createAction<UserLong | null>(
  userDataActions.SET_USER_DATA
);

export const setUserLoading = createAction<boolean>(
  userDataActions.SET_USER_LOADING
);

export const setFavoriteOffers = createAction<OfferShort[]>(
  userDataActions.SET_FAVORITE_OFFERS
);

export const setFavoriteOffersError = createAction<APIErrorResponse | null>(
  userDataActions.SET_FAVORITE_OFFERS_ERROR
);

export const validateUser = createAsyncThunk<void, void, AsyncThunkConfig>(
  userDataActions.VALIDATE_USER,
  async (_, thunkApi) => {
    try {
      const userDataPromise = thunkApi.extra.api.get<UserLong>(
        API_ROUTES.USER.VALIDATE
      );
      const favoritesPromise = thunkApi.extra.api.get<OfferShort[]>(
        API_ROUTES.FAVORITE.GET
      );
      const [{ data: userData }, { data: favoriteOffers }] = await Promise.all([
        userDataPromise,
        favoritesPromise,
      ]);
      thunkApi.dispatch(setAuthorizationStatus(true));
      thunkApi.dispatch(setUserData(userData));
      thunkApi.dispatch(setFavoriteOffers(favoriteOffers));
    } catch (error) {
      clearToken();
      thunkApi.dispatch(setAuthorizationStatus(false));
      thunkApi.dispatch(setUserData(null));
      thunkApi.dispatch(setFavoriteOffers([]));
    }
    thunkApi.dispatch(setUserLoading(false));
  }
);

export const login = createAsyncThunk<void, AuthInfo, AsyncThunkConfig>(
  userDataActions.LOGIN,
  async (credentials, thunkApi) => {
    thunkApi.dispatch(setUserLoading(true));
    try {
      const response = await thunkApi.extra.api.post<UserLong>(
        API_ROUTES.USER.LOGIN,
        { ...credentials }
      );
      setToken(response.data.token);
      thunkApi.dispatch(setAuthorizationStatus(true));
      thunkApi.dispatch(setUserData(response.data));
      const { data: favoriteOffers } = await thunkApi.extra.api.get<
        OfferShort[]
      >(API_ROUTES.FAVORITE.GET);
      thunkApi.dispatch(setFavoriteOffers(favoriteOffers));
    } catch (error) {
      thunkApi.dispatch(setAuthorizationStatus(false));
      thunkApi.dispatch(setUserData(null));
      thunkApi.dispatch(setFavoriteOffers([]));
    }
    thunkApi.dispatch(setUserLoading(false));
  }
);

export const logout = createAsyncThunk<void, void, AsyncThunkConfig>(
  userDataActions.LOGOUT,
  async (_, thunkApi) => {
    thunkApi.dispatch(setUserLoading(true));
    await thunkApi.extra.api.delete(API_ROUTES.USER.LOGOUT);
    clearToken();
    thunkApi.dispatch(setAuthorizationStatus(false));
    thunkApi.dispatch(setUserData(null));
    thunkApi.dispatch(setUserLoading(false));
  }
);

export const addFavoriteOffer = createAsyncThunk<
  boolean,
  OfferShort,
  AsyncThunkConfig
>(userDataActions.ADD_FAVORITE_OFFER, async (targetOffer, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const { data: offer } = await thunkApi.extra.api.post<OfferShort>(
      API_ROUTES.FAVORITE.SET(targetOffer.id, '1')
    );
    const newFavortiteOffers = [offer, ...state.userDataReducer.favoriteOffers];
    thunkApi.dispatch(setFavoriteOffers(newFavortiteOffers));
    return true;
  } catch (error) {
    thunkApi.dispatch(setFavoriteOffersError(errorHandler(error)));
    return false;
  }
});

export const removeFavoriteOffer = createAsyncThunk<
  boolean,
  OfferShort,
  AsyncThunkConfig
>(userDataActions.REMOVE_FAVORITE_OFFER, async (targetOffer, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const { data: offer } = await thunkApi.extra.api.post<OfferShort>(
      API_ROUTES.FAVORITE.SET(targetOffer.id, '0')
    );
    const newFavortiteOffers = state.userDataReducer.favoriteOffers.filter(
      (iteratedOffer) => iteratedOffer.id !== offer.id
    );
    thunkApi.dispatch(setFavoriteOffers(newFavortiteOffers));
    return true;
  } catch (error) {
    thunkApi.dispatch(setFavoriteOffersError(errorHandler(error)));
    return false;
  }
});
