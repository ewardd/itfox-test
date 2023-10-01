import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWeatherResponseApi } from "../Types/api";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_WEATHER_API,
  }),
  endpoints: (builder) => ({
    getWeatherByCoordinates: builder.query<
      IWeatherResponseApi,
      [number, number]
    >({
      query: ([lat, lon]) =>
        `weather?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    }),
  }),
});

export const { useGetWeatherByCoordinatesQuery } = weatherApi;
