import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTES, errorHandler } from '@/api';
import { AppThunk, AsyncThunkConfig } from '@/store/types';
import { OfferShort } from '@/types/offer';
import { City } from '@/types/city';
import { SortOrder } from '@/types/filter';
import { filterOffers, sortOffers } from '@/utils/offers';

export const OffersActions = {
  SET_CITY: 'city/set',
  SET_SORT_ORDER: 'sortOrder/set',
  SET_CITY_OFFERS: 'cityOffers/set',
  SET_GLOBAL_OFFERS: 'globalOffers/set',
  APPLY_CITY: 'city/apply',
  APPLY_SORT_ORDER: 'sortOrder/apply',
  UPDATE_CITY_OFFERS: 'cityOffers/update',
  FETCH_GLOBAL_OFFERS: 'globalOffers/fetch',
};

export const setCity = createAction<City>(OffersActions.SET_CITY);

export const setCityOffers = createAction<OfferShort[]>(
  OffersActions.SET_CITY_OFFERS
);

export const setSortOrder = createAction<SortOrder>(
  OffersActions.SET_SORT_ORDER
);

export const setGlobalOffers = createAction<SortOrder>(
  OffersActions.SET_GLOBAL_OFFERS
);

export function applyCity(newCity: City): AppThunk {
  return function applySortOrderThunk(dispatch, getState) {
    const state = getState();
    let newCityOffers = filterOffers(state.offersReducer.globalOffers, newCity);
    newCityOffers = sortOffers(newCityOffers, state.offersReducer.sortOrder);
    dispatch(setCity(newCity));
    dispatch(setCityOffers(newCityOffers));
  };
}

export function applySortOrder(newSortOrder: SortOrder): AppThunk {
  return function applySortOrderThunk(dispatch, getState) {
    const state = getState();
    const newCityOffers = sortOffers(
      state.offersReducer.cityOffers,
      newSortOrder
    );
    dispatch(setSortOrder(newSortOrder));
    dispatch(setCityOffers(newCityOffers));
  };
}

export function updateCityOffers(): AppThunk {
  return function updateCityOffersThunk(dispatch, getState) {
    const state = getState();
    let newCityOffers = filterOffers(
      state.offersReducer.globalOffers,
      state.offersReducer.city
    );
    newCityOffers = sortOffers(newCityOffers, state.offersReducer.sortOrder);
    dispatch(setCityOffers(newCityOffers));
  };
}

export const getGlobalOffers = createAsyncThunk<
  OfferShort[],
  void,
  AsyncThunkConfig
>(OffersActions.FETCH_GLOBAL_OFFERS, async (_, thunkApi) => {
  try {
    const response = await thunkApi.extra.api.get<OfferShort[]>(
      API_ROUTES.OFFERS.GET_GLOBAL
    );
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(errorHandler(error));
  }
});
