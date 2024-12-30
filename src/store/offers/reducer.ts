import { createSlice } from '@reduxjs/toolkit';
import { APIErrorResponse } from '@/api';
import { cities } from '@/constants/cities';
import { City } from '@/types/city';
import { SortOrder } from '@/types/filter';
import { OfferShort } from '@/types/offer';
import {
  setCity,
  setCityOffers,
  setSortOrder,
  setGlobalOffers,
  setGlobalOffersLoading,
  setGlobalOffersError,
  setCityOffersLoading,
} from './actions';
import { CityOffersLoading } from '@/types/loading';

type OffersState = {
  globalOffers: OfferShort[];
  globalOffersLoading: boolean;
  globalOffersError: APIErrorResponse | null;
  cityOffers: OfferShort[];
  cityOffersLoading: CityOffersLoading;
  city: City;
  sortOrder: SortOrder;
};

const initialState: OffersState = {
  globalOffers: [],
  globalOffersLoading: true,
  globalOffersError: null,
  cityOffers: [],
  cityOffersLoading: 'idle',
  city: cities.Paris,
  sortOrder: SortOrder.POPULAR,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCityOffers, (state, action) => {
        state.cityOffers = action.payload;
      })
      .addCase(setCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(setSortOrder, (state, action) => {
        state.sortOrder = action.payload;
      })
      .addCase(setGlobalOffers, (state, action) => {
        state.globalOffers = action.payload;
      })
      .addCase(setGlobalOffersLoading, (state, action) => {
        state.globalOffersLoading = action.payload;
      })
      .addCase(setGlobalOffersError, (state, action) => {
        state.globalOffersError = action.payload;
      })
      .addCase(setCityOffersLoading, (state, action) => {
        state.cityOffersLoading = action.payload;
      });
  },
});

export const { reducer: offersReducer } = offersSlice;
