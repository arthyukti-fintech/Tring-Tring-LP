import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../api/axios/axios";
import { SendMessageApi } from "../api/SendMessageApi";

// API CALL
export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await SendMessageApi(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState: {
    loading: false,
    success: false,
    message: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});

export default messageSlice.reducer;