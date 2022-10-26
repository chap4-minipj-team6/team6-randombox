import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import loginSlice from '../modules/LoginSlice';

const store = configureStore({
  reducer: { Login: loginSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
