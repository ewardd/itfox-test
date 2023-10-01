import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../Api/weatherApi";
import { locationNameApi } from "../Api/locationNameApi";
import { locationReducer } from "./Location/locationsSlice";
import { authReducer } from "./Auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
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
