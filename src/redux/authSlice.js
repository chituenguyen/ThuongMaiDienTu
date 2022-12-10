import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userInfoFromLocal = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : "";
const initialState = {
  userInfo: userInfoFromLocal ? userInfoFromLocal : [],
  loading: false,
  message: "",
  error: "",
  verifiedOfTutor: false,
  roleOfUser: "None",
};

export const loginUser = createAsyncThunk(
  "loginuser",
  async (body, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const rs = await axios.post("http://localhost:8797/login", body, config);
      localStorage.setItem("userInfo", JSON.stringify(rs));
      return rs.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk("logoutUser", async () => {
  localStorage.removeItem("userInfo");
});

export const registerUser = createAsyncThunk(
  "registeruser",
  async (body, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const rs = await axios.post(
        "http://localhost:8797/register",
        body,
        config
      );
      return rs.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
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
        state.roleOfUser = state.userInfo?.user?.role;
        if (state.userInfo?.user?.verified) {
          state.verifiedOfTutor = true;
        }
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.error = action.payload.error;
      })

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.error = action.payload.error;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.roleOfUser = "None";
        state.verifiedOfTutor = false;
        state.userInfo = [];
      });
  },
});
// const {reducer: authReducer} = authSlice;
// export const { handleResetRoleOfUser } = authSlice.actions;
export default authSlice.reducer;
