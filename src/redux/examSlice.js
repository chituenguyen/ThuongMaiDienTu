import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/common";

const initialState = {
  checkPost: false,
};

export const postAnswer = createAsyncThunk(
  "postAnswer",
  async (body, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const _url = API_URL + "/quiz/";
      const rs = await axios.post(_url, body, config);
      return rs.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const checkAnswer = createAsyncThunk(
    "checkAnswer",
    async (id, { rejectWithValue }) => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      try {
        const _url = API_URL + "/quiz/" +String(id) +'/attempted'
        const rs = await axios.get(_url, {}, config);
        return rs.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
const examSlice = createSlice({
  name: "examActionMethod",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAnswer.fulfilled, (state,action) => {
        state.checkPost = true;
      })
      .addCase(checkAnswer.fulfilled, (state,action) => {
        console.log(action)
        state.checkPost = action.payload.attemptedQuiz;
      });
  },
});

export default examSlice.reducer;
