import { createSlice } from "@reduxjs/toolkit";

interface IAuthSlice {
  isAuthenticated: boolean;
}

const initialState: IAuthSlice = {
  isAuthenticated: !!localStorage.getItem("auth"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated(state) {
      state.isAuthenticated = true;
      localStorage.setItem("auth", "true");
    },
    setUnauthenticated(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("auth");
    },
  },
});

export const { setAuthenticated, setUnauthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;
