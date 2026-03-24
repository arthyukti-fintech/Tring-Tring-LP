import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { readyToJoinApi } from "../api/readyToJoinApi";

export const readyToJoin = createAsyncThunk(
  "readyToJoin/readyToJoin",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await readyToJoinApi(formData);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const readyToJoinSlice = createSlice({
  name: "readyToJoin",
  initialState: {
    loading: false,
    error: null,
    success: false,
    message: "",
  },

  reducers: {
    resetReadyToJoin: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(readyToJoin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = "";
      })
      .addCase(readyToJoin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(readyToJoin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        state.message = "";
      });
  },
});

export const { resetReadyToJoin } = readyToJoinSlice.actions;

export default readyToJoinSlice.reducer;