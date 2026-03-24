import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice.js";
import getNotifiedReducer from "./slices/getNotifiedSlice.js"
import readyToJoinReducer from "./slices/readyToJoinSlice.js"
export const store = configureStore({
  reducer: {
    message: messageReducer,
    getNotified: getNotifiedReducer,
    readyToJoin: readyToJoinReducer,

  },
});