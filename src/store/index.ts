import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '@/api';
import { cityOffersReducer } from './city-offers/reducer';
import { globalOffersReducer } from './global-offers/reducer';
import { offerReducer } from './offer/reducer';
import { userDataReducer } from './user-data/reducer';

const api = createAPI();

const rootReducer = combineReducers({
  cityOffersReducer,
  globalOffersReducer,
  offerReducer,
  userDataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});
