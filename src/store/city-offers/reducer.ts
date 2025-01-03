import { createSlice } from '@reduxjs/toolkit';
import { CITIES } from '@/constants/cities';
import { City } from '@/types/city';
import { SortOrder } from '@/types/filter';
import { LoadingState } from '@/types/loading';
import { OfferShort } from '@/types/offer';
import { Point } from '@/types/point';
import { setOffers, setLoading, setCity, setSortOrder, setActivePoint } from './actions';

export type CityOffersState = {
  offers: OfferShort[];
  loading: LoadingState;
  city: City;
  sortOrder: SortOrder;
  activePoint: Point | undefined;
};

const initialState: CityOffersState = {
  offers: [],
  loading: 'idle',
  city: CITIES.Paris,
  sortOrder: SortOrder.POPULAR,
  activePoint: undefined
};

const cityOffersSlice = createSlice({
  name: 'cityOffers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setOffers, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(setLoading, (state, action) => {
        state.loading = action.payload;
      })
      .addCase(setCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(setSortOrder, (state, action) => {
        state.sortOrder = action.payload;
      })
      .addCase(setActivePoint, (state, action) => {
        state.activePoint = action.payload;
      });
  },
});

export const { reducer: cityOffersReducer } = cityOffersSlice;
