import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fetchPicturesThunk = createAsyncThunk(
  "pictures/getPictures",
  async (_, thunkAPI) => {
    try {
      const { data } = await api("pictures");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message ?? error.message
      );
    }
  }
);
