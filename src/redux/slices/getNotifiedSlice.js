import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetNotifiedApi } from "../api/GetNotifiedApi";

export const getNotified = createAsyncThunk(
    "getNotified/create",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await GetNotifiedApi(formData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

const getNotifiedSlice = createSlice({
    name: "getNotified",
    initialState: {
        loading: false,
        success: false,
        message: "",
        error: null
    },
    reducers: {
        resetState: (state) => {
            state.loading = false;
            state.success = false;
            state.message = "";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNotified.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.message = "";
                state.error = null;
            })
            .addCase(getNotified.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
                state.error = null;
            })
            .addCase(getNotified.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.message = "";
                state.error = action.payload?.message 
            })
    }

})


export const { resetState } = getNotifiedSlice.actions;
export default getNotifiedSlice.reducer;