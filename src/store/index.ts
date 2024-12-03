import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '@/api';
import { offersReducer } from './offers/reducer';
import { userReducer } from './user/reducer';
import { offerReducer } from './offer/reducer';

const rootReducer = combineReducers({
  offersReducer,
  userReducer,
  offerReducer,
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
