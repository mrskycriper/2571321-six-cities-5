import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '@/api';
import { cityOffersReducer } from './city-offers/reducer';
import { globalOffersReducer } from './global-offers/reducer';
import { offerReducer } from './offer/reducer';
import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
  cityOffersReducer,
  globalOffersReducer,
  offerReducer,
  userReducer,
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
