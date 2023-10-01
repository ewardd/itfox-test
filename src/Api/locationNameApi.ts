import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILocationNameResponseApi } from "../Types/api";

export const locationNameApi = createApi({
  reducerPath: "locationNameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_LOCATION_API,
  }),
  endpoints: (builder) => ({
    getLocationNameByCoordinates: builder.query<
      ILocationNameResponseApi,
      [number, number]
    >({
      query: ([lat, lon]) =>
        `reverse?lat=${lat}8&lon=${lon}&limit=5&appid=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useGetLocationNameByCoordinatesQuery } = locationNameApi;
