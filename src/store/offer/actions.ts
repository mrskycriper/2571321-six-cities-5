import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTES, APIErrorResponse, errorHandler } from '@/api';
import { AsyncThunkConfig } from '@/store/types';
import { CommentLong, CommentShort } from '@/types/comment';
import { OfferShort, OfferLong } from '@/types/offer';

export const OfferActions = {
  SET_OFFER: 'offer/set',
  SET_COMMENTS: 'comments/set',
  SET_NEARBY_OFFERS: 'nerbyOffers/set',
  SET_OFFER_LOADING: 'offerLoading/set',
  SET_OFFER_ERROR: 'offerRrror/set',
  SET_COMMENT_ERROR: 'commentError/set',
  FETCH_OFFER: 'offer/fetch',
  POST_COMMENT: 'comment/post',
};

export const setOffer = createAction<OfferLong>(OfferActions.SET_OFFER);

export const setComments = createAction<CommentLong[]>(
  OfferActions.SET_COMMENTS
);

export const setNearbyOffers = createAction<OfferShort[]>(
  OfferActions.SET_NEARBY_OFFERS
);

export const setOfferLoading = createAction<boolean>(
  OfferActions.SET_OFFER_LOADING
);

export const setOfferError = createAction<APIErrorResponse | null>(
  OfferActions.SET_OFFER_ERROR
);

export const setCommentError = createAction<APIErrorResponse | null>(
  OfferActions.SET_COMMENT_ERROR
);

export const fetchOffer = createAsyncThunk<void, string, AsyncThunkConfig>(
  OfferActions.FETCH_OFFER,
  async (offerId: string, thunkApi) => {
    try {
      thunkApi.dispatch(setOfferLoading(true));

      const { data: offer } = await thunkApi.extra.api.get<OfferLong>(
        API_ROUTES.OFFERS.GET_EXACT(offerId)
      );
      const { data: comments } = await thunkApi.extra.api.get<CommentLong[]>(
        API_ROUTES.COMMENTS.GET(offerId)
      );
      const { data: nearbyOffers } = await thunkApi.extra.api.get<OfferShort[]>(
        API_ROUTES.OFFERS.GET_NEARBY(offerId)
      );

      thunkApi.dispatch(setOffer(offer));
      thunkApi.dispatch(setComments(comments));
      thunkApi.dispatch(setNearbyOffers(nearbyOffers));

      thunkApi.dispatch(setOfferLoading(false));
    } catch (error) {
      thunkApi.dispatch(setOfferError(errorHandler(error)));
    }
  }
);

export const postComment = createAsyncThunk<
  void,
  { offerId: string; comment: CommentShort },
  AsyncThunkConfig
>(OfferActions.POST_COMMENT, async (payload, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const { data: comment } = await thunkApi.extra.api.post<CommentLong>(
      API_ROUTES.COMMENTS.POST(payload.offerId),
      payload.comment
    );

    thunkApi.dispatch(setComments([comment, ...state.offerReducer.comments]));
  } catch (error) {
    thunkApi.dispatch(setCommentError(errorHandler(error)));
  }
});
