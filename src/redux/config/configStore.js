import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import item from '../modules/itemSlice';
import signUpSlice from '../modules/signUpSlice';

const store = configureStore({
  reducer: { items: item, signUpS: signUpSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
