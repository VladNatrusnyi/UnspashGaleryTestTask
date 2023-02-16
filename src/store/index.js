import { configureStore } from "@reduxjs/toolkit";
import { unspashApi } from "./unsplashApi/unspashApi";
import imagesSlice from "./imagesSlice/imagesSlice";

export const store = configureStore({
  reducer: {
    images: imagesSlice,
    [unspashApi.reducerPath]: unspashApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(unspashApi.middleware)
})
