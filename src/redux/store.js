import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer from './countriesSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
