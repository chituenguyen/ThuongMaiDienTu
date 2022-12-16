import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  course: [],
};

export const getCourse = createAsyncThunk(
  "getCourse",
  async (body,{ rejectWithValue }) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const _url = "http://localhost:8797/course/get-open-course";
      console.log("hello")
      const rs = await axios.post(_url, body, config);
      console.log(rs);
      return rs.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const courseSlice = createSlice({
  name: "getCourseSlice",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getCourse.fulfilled, (state, action) => {
      state.course = action.payload.data;
    });
  },
});

export default courseSlice.reducer;
