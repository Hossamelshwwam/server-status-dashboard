import { createSlice } from "@reduxjs/toolkit";
import { logging } from "./authSlice";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, actions) => {
      state.value += actions.payload;
    },
    decrement: (state, actions) => {
      state.value -= actions.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logging, (state, actions) => {
      state.value = 0;
    });
  },
});

export const { reset, decrement, increment } = counterSlice.actions;

export default counterSlice.reducer;
