import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '@/api';
import { offersReducer } from './offers/reducer';

const rootReducer = combineReducers({
  offersReducer,
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
