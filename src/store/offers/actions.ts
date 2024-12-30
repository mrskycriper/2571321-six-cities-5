import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTES, APIErrorResponse, errorHandler } from '@/api';
import { AppThunk, AsyncThunkConfig } from '@/store/types';
import { City } from '@/types/city';
import { SortOrder } from '@/types/filter';
import { CityOffersLoading } from '@/types/loading';
import { OfferShort } from '@/types/offer';
import { filterOffers, sortOffers } from '@/utils/offers';

export const OffersActions = {
  SET_CITY: 'city/set',
  SET_SORT_ORDER: 'sortOrder/set',
  SET_CITY_OFFERS: 'cityOffers/set',
  SET_GLOBAL_OFFERS: 'globalOffers/set',
  SET_GLOBAL_OFFERS_LOADING: 'globalOffersLoading/set',
  SET_GLOBAL_OFFERS_ERROR: 'globalOffersError/set',
  APPLY_CITY: 'city/apply',
  APPLY_SORT_ORDER: 'sortOrder/apply',
  UPDATE_CITY_OFFERS: 'cityOffers/update',
  FETCH_GLOBAL_OFFERS: 'globalOffers/fetch',
  SET_CITY_OFFERS_LOADING: 'cityOffersLoading/set',
};

export const setCity = createAction<City>(OffersActions.SET_CITY);

export const setCityOffers = createAction<OfferShort[]>(
  OffersActions.SET_CITY_OFFERS
);

export const setSortOrder = createAction<SortOrder>(
  OffersActions.SET_SORT_ORDER
);

export const setGlobalOffers = createAction<OfferShort[]>(
  OffersActions.SET_GLOBAL_OFFERS
);

export const setGlobalOffersLoading = createAction<boolean>(
  OffersActions.SET_GLOBAL_OFFERS_LOADING
);

export const setGlobalOffersError = createAction<APIErrorResponse | null>(
  OffersActions.SET_GLOBAL_OFFERS_ERROR
);

export const setCityOffersLoading = createAction<CityOffersLoading>(
  OffersActions.SET_CITY_OFFERS_LOADING
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
    dispatch(setCityOffersLoading('loading'));
    const state = getState();
    let newCityOffers = filterOffers(
      state.offersReducer.globalOffers,
      state.offersReducer.city
    );
    newCityOffers = sortOffers(newCityOffers, state.offersReducer.sortOrder);
    dispatch(setCityOffers(newCityOffers));
    dispatch(setCityOffersLoading('done'));
  };
}

export const fetchGlobalOffers = createAsyncThunk<void, void, AsyncThunkConfig>(
  OffersActions.FETCH_GLOBAL_OFFERS,
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(setGlobalOffersLoading(true));
      const { data: globalOffers } = await thunkApi.extra.api.get<OfferShort[]>(
        API_ROUTES.OFFERS.GET_GLOBAL
      );
      thunkApi.dispatch(setGlobalOffers(globalOffers));
      thunkApi.dispatch(setGlobalOffersLoading(false));
    } catch (error) {
      thunkApi.dispatch(setGlobalOffersError(errorHandler(error)));
    }
  }
);
