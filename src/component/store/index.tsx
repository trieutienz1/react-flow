import { configureStore } from "@reduxjs/toolkit";
import flowReducer from "../reducer/flow";

export const store = configureStore({
  reducer: {
    flow: flowReducer,
  },
});
