import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  userSlice,
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;