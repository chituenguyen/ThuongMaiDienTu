import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./redux/authSlice"
import courseSlice from './redux/courseSlice'
import examSlice from './redux/examSlice'

export const store = configureStore({
  reducer: {
    userLogin: authSlice,
    answer : examSlice,
    course:courseSlice
  },
})