import { createAction } from '@reduxjs/toolkit';
import { AppThunk } from '@/store/types';
import { City } from '@/types/city';
import { SortOrder } from '@/types/filter';
import { LoadingState } from '@/types/loading';
import { OfferShort } from '@/types/offer';
import { Point } from '@/types/point';
import { filterOffers, sortOffers } from '@/utils/offers';

export const CityOffersActions = {
  SET_OFFERS: 'cityOffers/set',
  SET_LOADING: 'cityOffersLoading/set',
  SET_CITY: 'city/set',
  SET_SORT_ORDER: 'sortOrder/set',
  SET_ACTIVE_POINT: 'activePoint/set',
  CHANGE_CITY: 'city/change',
  CHANGE_SORT_ORDER: 'sortOrder/change',
  UPDATE_OFFERS: 'cityOffers/update',
};

export const setOffers = createAction<OfferShort[]>(
  CityOffersActions.SET_OFFERS
);

export const setLoading = createAction<LoadingState>(CityOffersActions.SET_LOADING);

export const setCity = createAction<City>(CityOffersActions.SET_CITY);

export const setSortOrder = createAction<SortOrder>(
  CityOffersActions.SET_SORT_ORDER
);

export const setActivePoint = createAction<Point | undefined>(
  CityOffersActions.SET_ACTIVE_POINT
);

export function updateCityOffers(): AppThunk {
  return function updateCityOffersThunk(dispatch, getState) {
    dispatch(setLoading('loading'));
    const state = getState();
    let newCityOffers = filterOffers(
      state.globalOffersReducer.offers,
      state.cityOffersReducer.city
    );
    newCityOffers = sortOffers(newCityOffers, state.cityOffersReducer.sortOrder);
    dispatch(setOffers(newCityOffers));
    dispatch(setLoading('done'));
  };
}

export function changeCity(newCity: City): AppThunk {
  return function changeCityThunk(dispatch,) {
    dispatch(setCity(newCity));
    dispatch(updateCityOffers());
  };
}

export function changeSortOrder(newSortOrder: SortOrder): AppThunk {
  return function changeSortOrderThunk(dispatch,) {
    dispatch(setSortOrder(newSortOrder));
    dispatch(updateCityOffers());
  };
}
