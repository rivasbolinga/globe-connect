import { configureStore } from "@reduxjs/toolkit";
import paintingsReducer from './paintingsSlice';

const store = configureStore({
  reducer: {
    paintings: paintingsReducer
  }
})

export default store;