import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 10, times: 0 },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    increment2: (state) => {
      state.counter += 2;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, increment2, decrement } = counterSlice.actions;
