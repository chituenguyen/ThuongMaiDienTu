import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/common";
const axiosClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const userInfoFromLocal = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : "";
const roleIdFromLocal = localStorage.getItem("roleId")
  ? JSON.parse(localStorage.getItem("roleId"))
  : "";
const initialState = {
  userInfo: userInfoFromLocal ? userInfoFromLocal.data : [],
  loading: false,
  message: "",
  error: "",
  verifiedOfTutor: false,
  tutor: [],
  roleOfUser: "None",
  roleId: roleIdFromLocal ? roleIdFromLocal.data._id : "",
  link: "",
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
      const _url = API_URL + "/login";
      const rs = await axios.post(_url, body, config);
      localStorage.setItem("userInfo", JSON.stringify(rs));
      return rs.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getMomo = createAsyncThunk(
  "getMomo",
  async ({ money, token }, { rejectWithValue }) => {
    // console.log(money, token);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const _url = API_URL + "/transaction/bill-infor";
      const rs = await axios.post(_url, { amount: money }, config);
      return rs.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRoleId = createAsyncThunk(
  "getRoleId",
  async (id, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const _url = API_URL + "/user/" + String(id);
      const rs = await axios.get(_url, config);
      localStorage.setItem("roleId", JSON.stringify(rs));
      return rs.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk("logoutUser", async () => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("roleId");
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
      const _url = API_URL + "/register";
      const rs = await axios.post(_url, body, config);
      return rs.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getInformationOfUser = createAsyncThunk(
  "getInformationOfUser",
  async (userId, { rejectWithValue }) => {
    try {
      const _url = "/user/" + String(userId);
      const response = await axiosClient.get(_url);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getAllCourseOfTutor = createAsyncThunk(
  "getAllCourseOfTutor",
  async (tutorId, { rejectWithValue }) => {
    try {
      const _url = "/tutor/" + String(tutorId) + "/applied-courses";
      const response = await axiosClient.get(_url);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getInformationOfCustomer = createAsyncThunk(
  "getInformationOfCustomer",
  async (customerId, { rejectWithValue }) => {
    try {
      const _url = "/customer/" + String(customerId);
      const response = await axiosClient.get(_url);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getInformationOfGrade = createAsyncThunk(
  "getInformationOfGrade",
  async (gradeId, { rejectWithValue }) => {
    try {
      const _url = "/grade/" + String(gradeId);
      const response = await axiosClient.get(_url);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getInformationOfSubject = createAsyncThunk(
  "getInformationOfSubject",
  async (subjectId, { rejectWithValue }) => {
    try {
      const _url = "/subject/" + String(subjectId);
      const response = await axiosClient.get(_url);
      return response.data;
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
        state.tutor = [];
      })
      .addCase(getInformationOfUser.fulfilled, (state, action) => {
        if (action.payload?.user?.role === "tutor") {
          state.tutor = action.payload;
        }
      })
      .addCase(getInformationOfUser.rejected, (state, action) => {
        state.message = action.payload.message;
        state.error = action.payload.error;
      })
      .addCase(getInformationOfCustomer.fulfilled, (state, action) => {
        // console.log(action.payload)
      })
      .addCase(getInformationOfCustomer.rejected, (state, action) => {
        state.message = action.payload.message;
        state.error = action.payload.error;
      })
      .addCase(getInformationOfSubject.fulfilled, (state, action) => {
        // console.log(action.payload)
      })
      .addCase(getInformationOfSubject.rejected, (state, action) => {
        state.message = action.payload.message;
        state.error = action.payload.error;
      })
      .addCase(getInformationOfGrade.fulfilled, (state, action) => {
        // console.log(action.payload)
      })
      .addCase(getInformationOfGrade.rejected, (state, action) => {
        state.message = action.payload.message;
        state.error = action.payload.error;
      })
      .addCase(getAllCourseOfTutor.fulfilled, (state, action) => {
        // console.log(action.payload);
      })
      .addCase(getAllCourseOfTutor.rejected, (state, action) => {
        state.message = action.payload.message;
        state.error = action.payload.error;
      })
      .addCase(getRoleId.fulfilled, (state, action) => {
        state.roleId = action.payload._id;
      })
      .addCase(getMomo.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.link = action.payload.qrCodeUrl;
      });
  },
});
// const {reducer: authReducer} = authSlice;
// export const { handleResetRoleOfUser } = authSlice.actions;
export default authSlice.reducer;
