import { createSlice } from "@reduxjs/toolkit";
import {
  currentThunk,
  forgotThunk,
  logoutThunk,
  signInThunk,
  signUpThunk,
  updatePasswordThunk,
} from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    token: "",
  },
  reducers: {
    // changeDayNorma: (state, { payload }) => {
    //   state.user.dailyNorma = payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(currentThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = true;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;
        state.token = "";
        state.isLoading = false;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = true;
      })
      .addCase(forgotThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(forgotThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(updatePasswordThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePasswordThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updatePasswordThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
