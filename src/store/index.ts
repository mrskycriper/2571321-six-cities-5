import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '@/api';
import { offersReducer } from './offers/reducer';
import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
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
