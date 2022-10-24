import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  mypage: [],
  isLoading: false,
  error: null,
};

export const __getMypage = createAsyncThunk(
  'getMypage',
  async (payload, thunkAPI) => {
    try {
      console.log(payload); // 이 값이 saha 여야만 해
      if (payload === 'saha') {
        // http://3.35.231.116/mypages/saha
        const data = await axios.get('http://3.35.231.116/mypages/', payload);
        console.log(data);
        return thunkAPI.fulfillWithValue(data.data);
      }
      return false;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const mypageSlice = createSlice({
  name: 'mypage',
  initialState,
  reducers: {},
  extraReducers: {
    [__getMypage.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMypage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.mypage = action.payload;
    },
    [__getMypage.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = mypageSlice.actions;
export default mypageSlice.reducer;
