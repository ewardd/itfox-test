import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../Constants";

export type locationNameApiRes = [{ name: string }];

export const locationNameApi = createApi({
  reducerPath: "locationNameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/geo/1.0",
  }),
  endpoints: (builder) => ({
    getLocationNameByCoordinates: builder.query<
      locationNameApiRes,
      [number, number]
    >({
      query: ([lat, lon]) =>
        `reverse?lat=${lat}8&lon=${lon}&limit=5&appid=${API_KEY}`,
    }),
  }),
});

export const { useGetLocationNameByCoordinatesQuery } = locationNameApi;
