import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import jobSlice from './jobSlice';
import applicationSlice from './applicationSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import companySlice from "./companySlice";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
  job: jobSlice,
  company:companySlice,
  application:applicationSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, // Use the persistedReducer here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// Export the store and the persistor
export const persistor = persistStore(store);
export default store;
