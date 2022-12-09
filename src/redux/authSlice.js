import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: [],
  loading: false,
  message: "",
  error: "",
};

export const loginUser = createAsyncThunk("loginuser", async (body, { rejectWithValue }) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  try {
    const rs = await axios.post("http://localhost:8797/login", body, config);
    return rs.data;
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
});

const authSlice = createSlice({
  name: "userAuthentication",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.error = action.payload.error;
      });
  },
});

export default authSlice.reducer;
