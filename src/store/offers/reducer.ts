import { createSlice } from '@reduxjs/toolkit';
import {
  setCity,
  setCityOffers,
  setSortOrder,
  getGlobalOffers,
} from './actions';
import { OfferShort } from '@/types/offer';
import { City } from '@/types/city';
import { SortOrder } from '@/types/filter';
import { cities } from '@/constants/cities';

type OffersState = {
  globalOffers: OfferShort[];
  loading: boolean;
  error: string | null;
  cityOffers: OfferShort[];
  city: City;
  sortOrder: SortOrder;
};

const initialState: OffersState = {
  globalOffers: [],
  loading: true,
  error: null,
  cityOffers: [],
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
      .addCase(getGlobalOffers.fulfilled, (state, action) => {
        state.globalOffers = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getGlobalOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { reducer: offersReducer } = offersSlice;
