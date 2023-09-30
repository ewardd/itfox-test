import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./Location/locationsSlice";
import { weatherApi } from "../Api/weatherApi";
import { locationNameApi } from "../Api/locationNameApi";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [locationNameApi.reducerPath]: locationNameApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      weatherApi.middleware,
      locationNameApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
