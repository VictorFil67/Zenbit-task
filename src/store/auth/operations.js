import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

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
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
