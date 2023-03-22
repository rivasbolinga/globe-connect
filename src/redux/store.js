import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from './countriesSlice';
import logger from 'redux-logger';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;