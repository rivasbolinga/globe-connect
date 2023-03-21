import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from './countriesSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;