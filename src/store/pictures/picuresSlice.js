import { createSlice } from "@reduxjs/toolkit";
import { fetchPicturesThunk } from "./operations";

const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPicturesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPicturesThunk.fulfilled, (state, { payload }) => {
        state.pictures = payload;
        state.isLoading = false;
      })
      .addCase(fetchPicturesThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const picturesReducer = picturesSlice.reducer;
