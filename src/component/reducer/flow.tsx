import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nodes: [
    {
      id: "n1",
      position: { x: 0, y: 0 },
      type: "home",
      data: {
        label: "Node 2",
        showToolbar: false,
      },
    },
    {
      id: "n2",
      position: { x: 0, y: 100 },
      type: "condition",
      data: {
        label: "node 1",
        showToolbar: false,
      },
    },

    {
      id: "n3",
      position: { x: 0, y: 200 },
      type: "schedules",
      data: {
        label: "schedules",
        showToolbar: false,
      },
    },

    {
      id: "n4",
      position: { x: 0, y: 300 },
      type: "loop",
      data: {
        label: "node loop",
        showToolbar: false,
      },
    },
    {
      id: "n5",
      position: { x: 0, y: 400 },
      type: "action",
      data: {
        label: "action node",
        showToolbar: false,
      },
    },
  ],
  edges: [],
  value: 0,
};

const flowSlice = createSlice({
  name: "flow",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = flowSlice.actions;
export default flowSlice.reducer;
