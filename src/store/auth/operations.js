import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../api/api";

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("users/register", body);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
export const signInThunk = createAsyncThunk(
  "auth/signIn",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("users/login", body);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
export const currentThunk = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      if (token) {
        setToken(token);
      } else {
        return thunkAPI.rejectWithValue("Token is not exist");
      }
      const { data } = await api("users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.post("users/logout");
      clearToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
export const forgotThunk = createAsyncThunk(
  "user/forgotPassword",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("users/forgot-password", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
export const updatePasswordThunk = createAsyncThunk(
  "user/updatePassword",
  async ({ tempCode, newPassword }, thunkAPI) => {
    try {
      const { data } = await api.post(
        `users/update-password/${tempCode.tempCode}`,
        { newPassword }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
