import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createRootReducer } from "./rootReducers";
import { apiSlice } from "./apiSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
}).concat(apiSlice.middleware);

export const store = configureStore({
  reducer: createRootReducer(),
  middleware: customizedMiddleware,
});

export const { dispatch, getState } = store;
