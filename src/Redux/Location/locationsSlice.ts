import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LocationEnum } from "../../Constants";
import { getLocationCoordinates } from "../../Methods/getLocationCoordinates";
import { RootState } from "../store";

interface ILocationState {
  selected: LocationEnum;
  coordinates: [number, number];
  locationName: string;
}

const initialState: ILocationState = {
  selected: LocationEnum.Moscow,
  coordinates: [55.7522, 37.6156],
  locationName: "Moscow",
};

export const getLocationCoordinatesThunk = createAsyncThunk(
  "getLocationCoordinatesThunk",
  async (payload: LocationEnum) => getLocationCoordinates(payload)
);

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocationCoordinatesThunk.fulfilled, (state, action) => {
      state.coordinates = action.payload;
      state.selected = action.meta.arg;
    });
  },
});

export const locationReducer = locationSlice.reducer;

export const selectedLocation = (state: RootState) => state.location.selected;
export const selectedCoordinates = (state: RootState) =>
  state.location.coordinates;
