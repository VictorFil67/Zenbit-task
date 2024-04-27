import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  currentThunk,
  forgotThunk,
  logoutThunk,
  signInThunk,
  signUpThunk,
  updatePasswordThunk,
} from "./auth/operations";
import { fetchPicturesThunk } from "./pictures/operations";

const loadingSlice = createSlice({
  name: "loader",
  initialState: {
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          signInThunk.pending,
          logoutThunk.pending,
          currentThunk.pending,
          forgotThunk.pending,
          updatePasswordThunk.pending,
          fetchPicturesThunk.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          signInThunk.rejected,
          logoutThunk.rejected,
          currentThunk.rejected,
          forgotThunk.rejected,
          updatePasswordThunk.rejected,
          fetchPicturesThunk.rejected
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.fulfilled,
          signInThunk.fulfilled,
          logoutThunk.fulfilled,
          currentThunk.fulfilled,
          forgotThunk.fulfilled,
          updatePasswordThunk.fulfilled,
          fetchPicturesThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const loadingReducer = loadingSlice.reducer;
