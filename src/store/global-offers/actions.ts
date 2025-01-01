import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTES, APIErrorResponse, errorHandler } from '@/api';
import { AsyncThunkConfig } from '@/store/types';
import { OfferShort } from '@/types/offer';

export const GlobalOffersActions = {
  SET_OFFERS: 'globalOffers/set',
  SET_LOADING: 'globalOffersLoading/set',
  SET_ERROR: 'globalOffersError/set',
  FETCH_OFFERS: 'globalOffers/fetch',
};

export const setOffers = createAction<OfferShort[]>(GlobalOffersActions.SET_OFFERS);

export const setLoading = createAction<boolean>(
  GlobalOffersActions.SET_LOADING
);

export const setError = createAction<APIErrorResponse | null>(
  GlobalOffersActions.SET_ERROR
);

export const fetchGlobalOffers = createAsyncThunk<void, void, AsyncThunkConfig>(
  GlobalOffersActions.FETCH_OFFERS,
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(setLoading(true));
      const { data: globalOffers } = await thunkApi.extra.api.get<OfferShort[]>(
        API_ROUTES.OFFERS.GET_GLOBAL
      );
      thunkApi.dispatch(setOffers(globalOffers));
      thunkApi.dispatch(setLoading(false));
    } catch (error) {
      thunkApi.dispatch(setError(errorHandler(error)));
    }
  }
);
