import { createSlice } from '@reduxjs/toolkit';
import { APIErrorResponse } from '@/api';
import { OfferShort } from '@/types/offer';
import { setOffers, setLoading, setError } from './actions';

type GlobalOffersState = {
  offers: OfferShort[];
  loading: boolean;
  error: APIErrorResponse | null;
};

const initialState: GlobalOffersState = {
  offers: [],
  loading: true,
  error: null,
};

const globalOffersSlice = createSlice({
  name: 'globalOffers',
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
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { reducer: globalOffersReducer } = globalOffersSlice;
