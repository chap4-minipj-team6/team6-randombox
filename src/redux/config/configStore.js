import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '../modules/signUpSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    signUpS: signUpSlice,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
    ],
    devTools: process.env.NODE_ENV !== 'production',
  },
});

export default store;
