import { createSlice } from '@reduxjs/toolkit';
import { APIErrorResponse } from '@/api';
import { CommentLong } from '@/types/comment';
import { OfferLong, OfferShort } from '@/types/offer';
import {
  setOffer,
  setComments,
  setNearbyOffers,
  setOfferLoading,
  setOfferError,
  setCommentError,
} from './actions';

type OfferState = {
  offer: OfferLong | null;
  comments: CommentLong[];
  nearbyOffers: OfferShort[];
  offerLoading: boolean;
  offerError: APIErrorResponse | null;
  commentError: APIErrorResponse | null;
};

const initialState: OfferState = {
  offer: null,
  comments: [],
  nearbyOffers: [],
  offerLoading: true,
  offerError: null,
  commentError: null,
};

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setOffer, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(setComments, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(setNearbyOffers, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(setOfferLoading, (state, action) => {
        state.offerLoading = action.payload;
      })
      .addCase(setOfferError, (state, action) => {
        state.offerError = action.payload;
      })
      .addCase(setCommentError, (state, action) => {
        state.commentError = action.payload;
      });
  },
});

export const { reducer: offerReducer } = offerSlice;
