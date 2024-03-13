import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favouriteReducer from './favourteSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    favourite:favouriteReducer,
  },
});

export default appStore;
