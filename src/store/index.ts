import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '@/api';
import { offerReducer } from './offer/reducer';
import { offersReducer } from './offers/reducer';
import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
  offerReducer,
  offersReducer,
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
