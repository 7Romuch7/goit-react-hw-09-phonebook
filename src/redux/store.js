import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
//import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist';
import { phonebookReducer } from './phonebook';
import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  /* logger */];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts:  phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const phonebookStore = {
  store,
  persistor
}

export default phonebookStore;
