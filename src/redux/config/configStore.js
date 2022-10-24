import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import mypage from '../modules/mypageSlice';

const store = configureStore({
  reducer: { mypage: mypage },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
