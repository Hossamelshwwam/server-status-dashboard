import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    logging: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export default authSlice.reducer;
export const { logging } = authSlice.actions;
