import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: [],
  loading: false,
};

export const loginUser = createAsyncThunk(
  "loginuser",
  async (body) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      }
    };
    const {data} = await axios.post(
      "http://localhost:8797/login",
      body,
      config
    );
    return data;
  }
);
const authSlice = createSlice({
  name: "user",
  initialState,
  reducer: {},
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    [loginUser.failed]: (state, action) => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
