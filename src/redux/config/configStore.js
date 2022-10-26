import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import item from '../modules/itemSlice';

const store = configureStore({
  reducer: { items: item },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
